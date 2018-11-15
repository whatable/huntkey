module.exports = `<h1>Hello!</h1> 
<detail>（该文本来自于module.js，但会被entry.js引用，
然后被编译成bundle.js)</detail>
<detail>（这个范例与此前的范例本质上完全一样，
只是增加了webpack.config来简化编译过程，
现在不需要“webpack 源文件 目标文件”的模式了，只需要webpack即可）</detail>
`;
//注意这里反撇号`的使用