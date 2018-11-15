module.exports = {
  entry:  __dirname + "/entry.js",
  output: {
    path: __dirname + "/",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  devServer: {
    contentBase:  __dirname + "./",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  }
}
//注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。