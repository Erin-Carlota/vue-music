
module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:'http://tingapi.ting.baidu.com/v1/restserver/ting',
                changeOrigin:true,
                pathReWrite:{
                    '/api':''
                }
            }
        }
    }
}