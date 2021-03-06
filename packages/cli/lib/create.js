
let path = require('path');
let  {getPromptModules} = require('./util/createTools') ;
let Creator= require('./Creator');
let {chalk, execa,loadModule} = require('@vue/cli-shared-utils');

async function create(projectName){
  let cwd = process.cwd();//获取 当前的工作目录 
  let name = projectName;//项目名
  let targetDir = path.join(cwd,name)
  //获取要弹出的选项
  let promptModules = getPromptModules();
  
  console.log(chalk.yellow('欢迎来到苹果家，自上而下的创建重应用，覆盖常见业务诉求，并配以资产库积累个性需求'));
  // console.log(chalk.yellow('推荐使用官方物料市场，npm.org/@ping'));
  console.log(chalk.yellow('特性：【常用包集合，接口服务，MOCK数据，CICD，请求方案，数据流管理，插件区块，端模板，丰富的物料最佳实践~~】'));
  console.log(chalk.green('消息通知：打通接口服务啦！！！'));
  console.log(chalk.red('警告：【移除：rice显性依赖】'));
  console.log(chalk.yellow('参与共建: vxq123456'));
  
  const creator  = new Creator(name,targetDir,promptModules);
  await creator.create();
}
module.exports = (...args)=>{
   return create(...args).catch(err=>{
       console.log('create err:', err);
   });
}