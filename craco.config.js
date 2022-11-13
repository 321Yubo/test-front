const path = require('path')

module.exports = {
    //webpack config
    webpack: {
        //Configuration alias
        alias:{
            //Using '@' to indicate where the src file is loacated
            '@':path.resolve(__dirname,'src')
        }
    }
}