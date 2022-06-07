<template>
    <div>
        <ClientOnly>
            <p text="sm" v-html="decodeURIComponent(description)" />
            <div class="example">
                <Example :file="path" :demo="formatPathDemos[path]" />
                <YxbDivider class="m-0" />
                <div class="op-btns">
                    <YxbTooltip content="复制代码" :visible-arrow="false">
                        <div @click="copyCode">
                          <YxbIcon name="copy-document" :size="16" class="op-btn" />
                        </div>
                    </YxbTooltip>
                    <YxbTooltip content="查看源代码" :visible-arrow="false" >
                        <div @click="toggleDark()" >
                          <YxbIcon name="s-tools" :size="16" class="op-btn"/>
                        </div>
                    </YxbTooltip>
                </div>
                <YxbCollapseTransition>
                    <SourceCode v-show="sourceVisible" :source="source" />
                </YxbCollapseTransition>
                <Transition name="el-fade-in-linear">
                    <div v-show="sourceVisible" class="example-float-control" @click="toggleDark(false)">
                        <YxbIcon name="caret-top" :size="16"/>
                        <span>隐藏源代码</span>
                    </div>
                </Transition>
            </div>
        </ClientOnly>
    </div>
</template>
<script>
import Example from '../components/demo/example.vue'
import SourceCode from '../components/demo/source-code.vue'
import demos from "@src/examples"
import Button from '../../../../src/components/button/src/button.vue'
import { useClipboard } from '@vueuse/core'
export default {
    name: 'Demo',
    components:{Example,SourceCode, Button},
    props:{
        description:{
            type: String,
            required: true 
        },
        source: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true,
        },
        rawSource: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            sourceVisible:false,
            formatPathDemos:demos
        }
    },
    methods:{
      toggleDark(flag){
        this.sourceVisible=flag===undefined?(!this.sourceVisible):flag
      },
      async copyCode(){
        const { copy, isSupported } = useClipboard({
          source: decodeURIComponent(this.rawSource)
        })
        if (!isSupported) {
          console.log("不支持复制")
          return false
        }
        try {
          await copy()
          console.log("复制成功")
        } catch (e) {
          console.log("复制失败",e)
        }

      }
    }
}
</script>
<style scoped lang="scss">
.m-0{
  margin: 0;
}
.example {
  border: 1px solid #dcdfe6;
  border-radius: 4px;

  .op-btns {
    padding: 0.8rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .el-icon {
      &:hover {
        color: #303133;
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: #909399;
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: #909399;

        &:hover {
          color: #303133;
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #dcdfe6;
    height: 44px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: #909399;
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: #409eff;
    }
  }
}
</style>