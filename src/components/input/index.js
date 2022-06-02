import ElInput from 'element-ui/packages/input';
ElInput.install = function(Vue) {
    Vue.component("YxbInput", ElButton);
};
export default ElInput;
