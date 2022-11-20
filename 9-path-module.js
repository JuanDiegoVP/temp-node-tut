const paht = require('path')

console.log(paht.sep)

const filePath = paht.join('/content/','subfolder','text.txt')
console.log(filePath)

const base = paht.basename(filePath);
console.log(base)

const absolute = paht.resolve(__dirname, 'content', 'subfoler','text.txt')
console.log(absolute)