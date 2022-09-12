module.exports={
    plugins:{
        autoprefixer:{
            browsers:['Android >= 4.0','ios >= 8']
        },
        'postcss-pxtorem': {
            rootValue:37.5, // 基准值
            propList:["*"]  // 匹配的class文件
        }
    }
}

