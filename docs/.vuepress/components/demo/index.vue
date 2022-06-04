<template>
    <div>
        <p text="sm" v-html="decodedDescription" />
        <component :is="demo" v-if="formatPathDemos" v-bind="$attrs" />
        <div v-html="decoded"></div>
    </div>
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
            required: false,
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
            decodedDescription:null,
            decoded: null,
            demo:null,
            formatPathDemos:null
        }
    },
    mounted(){
        this.decoded = decodeURIComponent(this.source)
        this.decodedDescription = decodeURIComponent(this.description)

        this.formatPathDemos=this.$demos
        this.demo=this.formatPathDemos[this.path]
         debugger

    }
}
</script>