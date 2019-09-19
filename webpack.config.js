const htmlWebpackPlugin = require("html-webpack-plugin");
// const html = require("html-withimg-loader!./index.html");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge")
const configMode = (mode)=>{
     return require(`./build.utils/webpack.${mode}.js`)
}
module.exports = ({mode})=>{
    return webpackMerge({
        mode,
        entry : "./src/index.js",
        module :{
            rules : [{
                test : /\.js$/,
                use : [{
                    loader : "babel-loader",
                    options : {
                        presets : ["@babel/preset-env"],
                    }
                }]
            },{
                test : /\.jpe?g/,
                use :[{
                    loader:"url-loader",
                    options : {
                        limit : 5000,
                        outputPath:'./img',
                        name:'[name].[hash].[ext]',
                    }
                }],
            },{
                test : /\.img$/,
                use : ["img-loader"],
            },]
        },
        output : {
            path : __dirname + "/dist",
            filename : "main.js"
        },
        plugins : [
            new htmlWebpackPlugin({
                template : './src/index.html'
            }),
            new webpack.ProgressPlugin(),
        ]
    },configMode(mode));
}