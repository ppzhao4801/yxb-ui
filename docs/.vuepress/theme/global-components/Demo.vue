<template>
    <div>
        <ClientOnly>
            <p text="sm" v-html="decodedDescription" />
            <div class="example">
                <Example :file="path" :demo="formatPathDemos[path]" />
            </div>
            <div v-html="decoded"></div>
        </ClientOnly>
    </div>
</template>
<script>
import Example from './demo/example'
import demos from "@src/examples"
export default {
    name: 'Demo',
    components:{Example},
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
            formatPathDemos:demos
        }
    },
    mounted(){
        this.decoded = decodeURIComponent(this.source)
        this.decodedDescription = decodeURIComponent(this.description)
    }
}
</script>