<template>
    <div>
        <ClientOnly>
            <p text="sm" v-html="decodeURIComponent(description)" />
            <div class="example">
                <Example :file="path" :demo="formatPathDemos[path]" />
               
                <div class="op-btns">

                </div>
                
                <SourceCode v-show="sourceVisible" :source="source" />
               
            </div>
        </ClientOnly>
    </div>
</template>
<script>
import Example from './demo/example.vue'
import SourceCode from './demo/source-code.vue'
import demos from "@src/examples"
export default {
    name: 'Demo',
    components:{Example,SourceCode},
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
            sourceVisible:true,
            formatPathDemos:demos
        }
    },
    mounted(){
    }
}
</script>