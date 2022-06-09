import { onMounted, onUnmounted, onUpdated } from 'vue'
import { isClient } from '@vueuse/core'

export const throttleAndDebounce = (fn, delay) => {
  let timeout = null
  let called = false
  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    if (!called) {
      fn()
      called = true
      setTimeout(() => {
        called = false
      }, delay)
    } else {
      timeout = setTimeout(fn, delay)
    }
  }
}

export function useActiveSidebarLinks(container,marker) {
  if (!isClient) return
  const onScroll = throttleAndDebounce(setActiveLink, 150)
  function setActiveLink() {
    const sidebarLinks = getSidebarLinks()
    const anchors = getAnchors(sidebarLinks)
    if (
      anchors.length &&
      window.scrollY + window.innerHeight === document.body.offsetHeight
    ) {
      console.log( window.scrollY,window.innerHeight,document.body.offsetHeight)
      activateLink(anchors[anchors.length - 1].hash)
      return
    }
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i]
      const nextAnchor = anchors[i + 1]
      const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor)
      if (isActive) {
        history.replaceState(
          null,
          document.title,
          hash ? (hash) : ' '
        )
        activateLink(hash)
        return
      }
    }
  }

  let prevActiveLink = null

  function activateLink(hash) {
    deactiveLink(prevActiveLink)

    const activeLink = (prevActiveLink =
      hash == null
        ? null
        : (container.querySelector(
            `.toc-item a[href="${decodeURIComponent(hash)}"]`
          )))
    if (activeLink) {
      activeLink.classList.add('active')
      marker.style.opacity = '1'
      marker.style.top = `${activeLink.offsetTop}px`
    } else {
      marker.style.opacity = '0'
      marker.style.top = '33px'
    }
  }

  function deactiveLink(link) {
    link && link.classList.remove('active')
  }
  window.requestAnimationFrame(setActiveLink)
  window.addEventListener('scroll', onScroll)

  // onUpdated(() => {
  //   activateLink(location.hash)
  // })

  // onUnmounted(() => {
  //   window.removeEventListener('scroll', onScroll)
  // })
}
function getSidebarLinks() {
  return Array.from(
    document.querySelectorAll('.toc-content .toc-link')
  )
}
function getAnchors(sidebarLinks) {
  return (
    Array.from(
      document.querySelectorAll('.doc-content .header-anchor')
    )
  ).filter((anchor) =>
    sidebarLinks.some((sidebarLink) => sidebarLink.hash === anchor.hash)
  )
}
function getPageOffset() {
  return (document.querySelector('.navbar')).offsetHeight
}
function getAnchorTop(anchor) {
  const pageOffset = getPageOffset()
  try {
    return anchor.parentElement && anchor.parentElement.offsetTop - pageOffset + 70
  } catch {
    return 0
  }
}
function isAnchorActive(
  index,
  anchor,
  nextAnchor
) {
  const scrollTop = window.scrollY
  if (index === 0 && scrollTop === 0) {
    return [true, null]
  }
  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null]
  }
  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, decodeURIComponent(anchor.hash)]
  }
  return [false, null]
}
