module.exports ={
    output : {
        filename : "main.js"
    },
    module : {
        rules : [{
            test : /\.css$/,
            use:["style-loader","css-loader"]
        }]
    }
}