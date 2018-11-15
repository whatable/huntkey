module.exports = `<h1>Hello!</h1> 
<detail>（该文本来自于module.js，但会被entry.js引用，
然后被编译成bundle.js)</detail>
<detail>（这个范例与此前的范例本质上完全一样，
重点是用npm调用webpack，
需要先做npm init，然后修改package.json中的scripts项，
将其改为"start":"webpack"
最后用npm start即可启动webpack）</detail>
`;
//注意这里反撇号`的使用