const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

process.env.NODE_ENV ='development';
module.exports ={
    mode: "development",
    target:'web',
    devtool:'cheap-module-source-map',
    entry: './src/index',
    output:{
        path:path.resolve(__dirname,"build"),
        publicPath:'/',
        filename:"bundle.js",

    },
    /*using webpack to serve our app in development , alternative is node expresss*/
    devServer:{
        stats:"minimal",
        overlay:true,/*overlays errors that occcure in the browser*/
        historyApiFallback:true,/* all request to index html to enable deeplinking */
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin":"*"},
        https:false
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node-modules/,
                use:["babel-loader","eslint-loader"]
                
            },
            {
                test:/\.css$/i,
                use:[
                    'style-loader',//injects styles into DOM
                    'css-loader'//Turns CSS into comonjs
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new ESLintPlugin(),
        new webpack.DefinePlugin({
            "process.env.API_URL": JSON.stringify("http://localhost:3001")
        })
    ]
}