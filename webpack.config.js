const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')


module.exports = {
    entry: ["./src/client/index.jsx"],
    output: {
        filename: "bundle.js",
        path: __dirname + "/public/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".jsx", ".js", ".json", '.scss']
    },

    module: {

        rules: [

            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.jsx?$/, loaders:["babel-loader"] },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.jsx$/, loader: "source-map-loader" },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                   fallback : 'style-loader', // The backup style loader
                   use: ['css-loader?sourceMap','sass-loader?sourceMap']
                })
            }
        ]
    },

    plugins: [new ExtractTextPlugin('[name].css')],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        compress: true,
        port: 9000
    }
};