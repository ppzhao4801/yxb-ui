<template>
    <div>
        <ClientOnly>
            <p text="sm" v-html="decodeURIComponent(description)" />
            <div class="example">
                <Example :file="path" :demo="formatPathDemos[path]" />
                <YxbDivider class="m-0" />
                <div class="op-btns">
                    <YxbTooltip content="复制代码" :visible-arrow="false">
                        <YxbIcon name="copy-document" :size="16" class="op-btn" />
                    </YxbTooltip>
                    <YxbTooltip content="查看源代码" :visible-arrow="false">
                        <YxbIcon name="s-tools" :size="16" class="op-btn" />
                    </YxbTooltip>
                </div>
                <YxbCollapseTransition>
                    <SourceCode v-show="sourceVisible" :source="source" />
                </YxbCollapseTransition>
                <Transition name="el-fade-in-linear">
                    <div v-show="sourceVisible" class="example-float-control" @click="toggleSourceVisible(false)">
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