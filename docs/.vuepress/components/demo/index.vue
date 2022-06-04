<template>
    <div>
        sdf
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
        this.decoded = decodeURIComponent(this.source)
        this.decodedDescription = decodeURIComponent(this.description)

        const demos = {
            "button/basic":()=>import("../../../examples/button/basic.vue")
        }
        if(this.demos){
         Object.keys(this.demos).forEach((key) => {
                demos[key.replace('../../../examples/', '').replace('.vue', '')] =
                this.demos[key].default
            })
         
        }
        this.formatPathDemos=demos
         this.demo=this.formatPathDemos[this.path]

    }
}
</script>