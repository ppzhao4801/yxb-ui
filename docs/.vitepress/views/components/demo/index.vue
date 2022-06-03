<template>
    <ClientOnly>
        <p text="sm" v-html="decodedDescription" />
        <component :is="demo" v-if="formatPathDemos" v-bind="$attrs" />
        <div v-html="decoded"></div>
    </ClientOnly>
</template>
<script>
import { computed } from 'vue'
export default {
    name: 'Demo',
    props:{
        source: {
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true 
        },
        file: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
        rawSource: {
            type: String,
            required: true,
        },
        demos: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            decodedDescription:null,
            decoded: null,
            demo:null,
            formatPathDemos:null
        }
    },
    mounted(){
        this.decoded = computed(() => {
            return decodeURIComponent(this.source)
        })
        this.decodedDescription = computed(() =>
            decodeURIComponent(this.description)
        )
        this.formatPathDemos = computed(() => {
            const demos = {}
            Object.keys(this.demos).forEach((key) => {
                demos[key.replace('../../examples/', '').replace('.vue', '')] =
                this.demos[key].default
            })
            return demos
         })
         this.demo=this.formatPathDemos[this.path]
    }
}
</script>