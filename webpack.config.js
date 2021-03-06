module.exports = {
    entry: './src/js/my_es6',
    output: {
        path: __dirname + "/js",
        filename: 'my.js',
        library: 'my'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader?presets[]=es2015" }
        ]
    },
    watch:true,
    watchOptions: {
        aggregateTimeout:100
    },
    devtool: 'inline-source-map'
};