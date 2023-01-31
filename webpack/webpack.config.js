const path = require('path');

module.exports = {
    // Entry file where we need to start bundling
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    module: {
        rules: [
            // there can be several rules for scss less and other file which needs to be compiled 
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}