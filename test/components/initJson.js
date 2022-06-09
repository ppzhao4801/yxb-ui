var fs = require('fs');
var path = require('path');
var Components = require('./data.json');
Components = Object.keys(Components);

let content ="{\n"
Components.forEach(function(key,index) {
  if(index===Components.length-1){
    content +=`\t"${key}" : "src/components/${key}/index.js"\n`
  }else{
    content +=`\t"${key}" : "src/components/${key}/index.js",\n`
  }
  
});
content+="}"
fs.writeFileSync(path.resolve(__dirname,'dict/components.json'), content, 'utf8');