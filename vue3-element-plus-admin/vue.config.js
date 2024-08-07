/*
 * @Author: shulu
 * @Date: 2023-12-14 10:13:21
 * @LastEditors: shulu
 * @LastEditTime: 2024-07-30 17:42:44
 * @Description: file content
 * @FilePath: \vue3-element-plus-admin\vue.config.js
 */
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir);
}
// webpack.config.js
// const ElementPlus = require("unplugin-element-plus/webpack").default;
module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    // 输出文件目录
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    /** vue3.0内置了webpack所有东西，
     * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
     **/
    configureWebpack: (config) => {
        config.resolve = {
            // 配置解析别名
            extensions: ['.js', '.json', '.vue'], // 自动添加文件名后缀
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@v': path.resolve(__dirname, './src/views'),
                '@u': path.resolve(__dirname, './src/utils'),
                '@a': path.resolve(__dirname, './src/api'),
                '@c': path.resolve(__dirname, './src/components'),
            },
        };
        config.externals = {
            vue: 'Vue',
            'element-plus': 'ElementPlus',
        };
        //关闭 webpack 的性能提示
        config.performance = {
            hints: false,
        };
    },
    chainWebpack: (config) => {
        config.module.rules.delete('svg');
        // set svg-sprite-loader
        config.module
            .rule('svg-sprite-svg')
            .test(/\.svg$/)
            .include.add(resolve('/src/components/svgIcon/icon'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            });
        // 配置base64转换规则
        // config.module
        //     .rule('images')
        //     .test(/\.(png|jpeg|jpg)$/)
        //     .use('url-loader')
        //     .loader('url-loader')
        //     .options({
        //         limit: 1024 * 10, // 小于 10k 的图片采用 base64，大于和等于 8k 的就正常打包成图片
        //         name: 'static/[name].[ext]', // 图片大于等于 10k 时，设置打包后图片的存放位置，name 是文件名，ext 是文件后缀
        //     });
        //开启图片压缩
        // config.module
        //     .rule('images')
        //     .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        //     .use('image-webpack-loader')
        //     .loader('image-webpack-loader')
        //     .options({ bypassOnDebug: true });
        // 载入项目分析工具
        // config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            scss: {
                prependData: `@import "./src/styles/main.scss";`,
            },
        },
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    /**
     *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
     */
    pwa: {},
    /**
     * 第三方插件配置
     */
    pluginOptions: {},
    devServer: {
        client: {
            overlay: false,
        },
        open: false, // 编译完成是否打开网页
        host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
        port: 8081, // 访问端口
        https: false, // 编译失败时刷新页面
        hot: true, // 开启热加载
        proxy: {
            [process.env.VUE_APP_API]: {
                target: process.env.VUE_APP_DEV_TARGET, //API服务器的地址  http://www.web-jshtml.cn/api/v3
                changeOrigin: true,
                pathRewrite: {
                    [`^${process.env.VUE_APP_API}`]: '',
                },
            },
        },
    },
};
