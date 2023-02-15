const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development", //デプロイするときは production
    entry: path.resolve(__dirname, "./src/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader", //昔のブラウザでも対応させる
                    },
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.(css|scss|sass)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000
    }
};