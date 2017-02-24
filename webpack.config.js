module.exports = {
    entry: './src/js/my_es6',
    output: {
        path: __dirname + "/js",
        filename: 'my.js',
        library: 'my_es6'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader?presets[]=es2015" }
        ]
    }
};