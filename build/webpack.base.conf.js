'use strict'
// 引入依赖模块
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  // 入口文件，路径相对于文件所在的位置，可以写成字符串、数组、对象
  // path.resolve([form...],to) 将to参数解析为绝对路径
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  // 输出配置
  output: {
    // 输出文件，路径相对于文件所在的位置
    path: config.build.assetsRoot,

  // 举例子-------------------------------------------------------
    // 输出文件，路径相对于本文件所在的位置
    //     path: path.resolve(__dirname, '../output/static/js/'),
     
        // 设置publicPath这个属性会出现很多问题：
        // 1.可以看成输出文件的另一种路径，差别路径是相对于生成的html文件；
        // 2.也可以看成网站运行时的访问路径；
        // 3.该属性的好处在于当你配置了图片CDN的地址，本地开发时引用本地的图片资源，上线打包时就将资源全部指向CDN了，如果没有确定的发布地址不建议配置该属性，特别是在打包图片时，路径很容易出现混乱，如果没有设置，则默认从站点根目录加载
        // publicPath: '../static/js/',
  // -----------------------------------------------------------------

   // 基于文件的md5生成Hash名称的script来防止缓存
    filename: '[name].js',

      // 非主入口的文件名，即未被列在entry中，却又需要被打包出来的文件命名配置
        // chunkFilename: '[id].[chunkhash].js'

    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
   // 其他解决方案
  resolve: {
    // require(请求)时省略的扩展名，遇到.vue结尾时也要去加载
    extensions: ['.js', '.vue', '.json'],
    // 模块别名地址。方便后续直接引用别名，无须写长长的地址，注意如果后续不能识别改别名，需要先设置root
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },

  // 不进行打包的模块
  externals:{},

 // 模块加载器
  module: {
    // 相当于gulp里的task,用来处理在入口文件中require的和其他方式引用进来的文件；test是正则表达式，匹配要处理的文件；loader匹配要使用的loader，"-loader"可以省略；include把要处理的目录包括进来，exclude排除不处理的目录
    rules: [
      // 使用vue-loader 加载 .vue 结尾的文件
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      // 使用babel 加载 .js 结尾的文件
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      // 加载图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
       // 加载图标
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
