
/**
 * @description 导出目录下指定所有模块
 * @param { String } directory 检索的目录
 * @param { Boolean } useSubdirectories 是否检索子文件夹
 * @param { RegExp } regExp 匹配文件的正则表达式,一般是文件名
 * @returns 
 */
export const importAll = (directory, useSubdirectories ,regExp) => {
 const files = require.context(directory, useSubdirectories, regExp) 
 return files.keys()
   .reduce((modules, modulePath) => {
     const moduleName = /\w+/.exec(modulePath)?.[0]// 模块名大写
     modules = Object.assign(modules, {
       [moduleName]: files(modulePath)?.default
     })
     return modules
   }, {})
}
