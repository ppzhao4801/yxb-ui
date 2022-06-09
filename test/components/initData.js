var fs = require('fs');
var path = require('path');
var Components = require('./data.json');
Components = Object.keys(Components);

Components.forEach(function(key) {
    var filePath = path.resolve(__dirname, `components/${key}`);
    if(!fs.existsSync(filePath)){
      fs.mkdirSync(filePath)
    }
    let upperCaseKey=""
    if(key.indexOf("-")>-1){
      const listKey=key.split("-")
      for(const index in listKey){
        upperCaseKey+=listKey[index].slice(0,1).toUpperCase() + listKey[index].slice(1)
      }
    }else{
      upperCaseKey=key.slice(0,1).toUpperCase() + key.slice(1)
    }
    const content = `import ${upperCaseKey} from "element-ui/lib/${key}";\n${upperCaseKey}.name="Yxb${upperCaseKey}"\nexport default ${upperCaseKey};`;
    var paths=path.resolve(filePath,'index.js')
    console.log(paths)
    fs.writeFileSync(path.resolve(filePath,'index.js'), content, 'utf8');
});