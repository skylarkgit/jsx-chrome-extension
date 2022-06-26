const path = require("path")
const appSrc = path.resolve(__dirname, './src')
const entrySrc = path.resolve(__dirname, './src/js/main.tsx')

module.exports = {
    entry: [
        '@babel/plugin-syntax-jsx',
        entrySrc
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
                include: [appSrc],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname),
        filename: "build/bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
};