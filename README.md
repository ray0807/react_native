# react_native 开发实践

## 主要目的
- 大势所趋
- ios android共同发展
- 动态更新
- ...


## 2016-06-29

  1.按照官网命令行安装RN出现失败   

  *  解决方法：多试几次
  
  2.运行第一个rn程序（android），首先得下载sdk tool（23.01），也可以修改成自己已经下载好的sdk tool ，具体位置是app：build.gradle

  *  解决方法：下载sdk tool（23.01）； 修改：app：build.gradle
  
  3.调试（太坑了）
  
  【genymotion】  window7（window10的bug在youtobe上也有说明）上安装最新版本的genymotion，然后下载image，再启动，你会发现根本起不来（unable to start virtul device）,我去···心中真的是万马奔腾啊 ，官网怎么会错呢，再我的不懈努力下（其实是运气好）。
    
  *  解决方案：virtulBox的问题，去virtulbox官网下载最新版本，覆盖安装，这也是最重要的一步，然后[猛戳这里配置](http://www.zhuantilan.com/jiqiao/31075.html)  如果只配置是没有办法的，只有这两步配合使用才能修好这个问题
  
  【真机测试】android 5.0以下的不能使用USB的adb reverse，所以只能配置wifi。
   
  *  解决方案：本狗是4.4的小三，最后没办法，只能刷机（genymotion实在是太慢了），配置rn配置wifi教程很多，请自行搜索。
