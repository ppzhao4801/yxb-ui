var fs = require('fs');
var path = require('path');
var Components = require('./data.json');
Components = Object.keys(Components);

let content = ""
let importContent=""
Components.forEach(function(key) {
  let upperCaseKey=""
  if(key.indexOf("-")>-1){
    const listKey=key.split("-")
    for(const index in listKey){
      upperCaseKey+=listKey[index].slice(0,1).toUpperCase() + listKey[index].slice(1)
    }
  }else{
    upperCaseKey=key.slice(0,1).toUpperCase() + key.slice(1)
  }
  importContent +=`import ${upperCaseKey} from "./components/${key}/index.js"\n`
});

let  componentList ="const components = [\n"
Components.forEach(function(key,index) {
  let upperCaseKey=""
  if(key.indexOf("-")>-1){
    const listKey=key.split("-")
    for(const index in listKey){
      upperCaseKey+=listKey[index].slice(0,1).toUpperCase() + listKey[index].slice(1)
    }
  }else{
    upperCaseKey=key.slice(0,1).toUpperCase() + key.slice(1)
  }  
  
  if(index===Components.length-1){
    componentList+=`\t${upperCaseKey}\n];`
  }else{
    componentList+=`\t${upperCaseKey},\n`
  }
});


let defaultContent="export default {\n\tversion: '1.0.0',\n\tinstall,\n"
Components.forEach(function(key,index) {
  let upperCaseKey=""
  if(key.indexOf("-")>-1){
    const listKey=key.split("-")
    for(const index in listKey){
      upperCaseKey+=listKey[index].slice(0,1).toUpperCase() + listKey[index].slice(1)
    }
  }else{
    upperCaseKey=key.slice(0,1).toUpperCase() + key.slice(1)
  }  
  
  if(index===Components.length-1){
    defaultContent+=`\t${upperCaseKey}\n};`
  }else{
    defaultContent+=`\t${upperCaseKey},\n`
  }
});


content += importContent
content += componentList

content +=
`
\n
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$YXB = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
\n
`
content += defaultContent

fs.writeFileSync(path.resolve(__dirname,'dict/index.js'), content, 'utf8');