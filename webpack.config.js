let path = require('path');

module.exports = {
    entry: {
        main: "./index.js",
    },
    output: {
        filename: "main.bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
        ]
    }
}
