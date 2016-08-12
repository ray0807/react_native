# react_native 开发实践

## 主要目的
- 大势所趋
- ios android共同发展
- 动态更新
- 性能比H5更好
- ...
 


 ## 2016-08-12
  * 1.Android native 与React native 混合开发
    本狗比较幸运，老大让我全全负责一个小项目，然后只提了一个要求，App中嵌入react native模块，这正合我意啊，已经过了3天了，写下混合开发的注意事项吧。
  
  * 2.native App中集成react native
    先来张飞机票（ http://facebook.github.io/react-native/docs/integration-with-existing-apps.html ），其实这里就有个坑，不信你试试，集成很多次，从native 启动react native 界面都是小红屏，本狗真的是试了近一个小时，依然没有找到原因，最后无奈init一个新项目，把配置都看了一遍，不知怎么的就好了，这里我说一些要注意的点：
    （1）package.json  这个文件使用官网上的就可以了，这个文件相当于android里面的app/build.gradle ，下载安装包之类的功用
    （2）项目/build.gradle ，这个文件中要设置maven路径，这个指向的是本地路径，千万注意路径的正确性（../node_...）,本狗吃过亏
    （3）npm install ,这个命令类似android studio中下载依赖包，注意：先要下载依赖（npm install），因为（2）中要引用
   
   * 3.小问题
     我嵌入的这个小模块有个返回按钮（不是物理按键），按这个imageview需要返回native界面，我一开始使用navigation，发现并没有什么卵用，后来没法，只能通过js与native通信，在native中finish()掉。
   
   * 4.开发效率
     这个是我最想吐槽，本狗没做过前段，所以不怎么熟悉js，css，HTML等，做一个不是很难得界面花了我一天时间，就是调调这个居中，那个靠右，绑定事件等。还是自己不够熟悉，感觉开发太慢了，有点像回到2年前毕业的时候。
   
   * 5.性能 
     本狗开发的界面不算难，就是几个tab+几个listview（类似native 中tabview+viewpage），首次进入react native界面估计得白屏1~2秒（个人觉得还是可以接受的），这个是由于在下载解析js，所以会消耗点时间，首次左右滑动，也是有点顿卡，原理类似，但是当已经加载后，再次操作，跟原生App并无两样。
   

 ## 2016-07-30
  * 1.开发工具最终方案（windows版，mac请忽略此项）
  
   WebStrom+sublime ，此方式的好处webstrom和androidstudio太像了，支持CTRL+右键查看文件等等功能，所以方便习惯，但是有时候需要重写一些方法，webstrom就有点鸡肋了，这个时候sublime就比较好了比如在class中打一个cons，就可以把constructer（）代码补全，很是方便。
  
  * 2.代码重构
  
   习惯了面向对象，既然ES6也有这方面的支持（class extend XXXX）所以试着把所有的代码都以ES6的方式实现，然后提取出公共部分继承，但是我还没找到在哪里做接口的实现方式，是不是我想多了呢···再研究研究吧...
## 2016-07-22
  * 1.开发工具是在是太坑，我是做android 的，用Android Studio用的实在是太爽了，现在写RN，就连代码格式化都很蛋疼（可能我的sublime text3插件装得不够多）。
  
  * 2.推荐大家有实力的可以买一台mac
  
  * 3.如果大家都跟我一样苦逼，那么就搞一台linux虚拟机吧，三步一卡，卡的潇洒，提供飞机票（http://facebook.github.io/react-native/docs/more-resources.html ），自己去官网安装吧。
  
  * 4.网上的教程写法不一，ES5 ES6混用，很容易就出现小红瓶（红屏），说你需要使用import React ，{Component} from ‘react’ 等等···其实你看着别人的代码运行的好好的，为什么移植到自己的项目中就出现小红瓶呢，其实也就是你ES5 与ES6在混用，这个编译器肯定不通过啊，他会告诉你  要么用5，要么用6。

  * 5.基础：最好的解决方案就是自己去学习下 ES5 和ES6的语法，本狗花了好长时间，才算勉强入门（可能是因为笨，whatever）。提供几个网站：麦子学院（EMCAScript 6）、慕课网、等等。
  
  * 6.参考别人的项目：但是这个也得有技巧，你会发现当下来的代码很多都不能运行，不知道是 rn更新太快还是怎么，反正我都是自己看着他们的代码修改，能修改就仔细看看，修改不好就他妈滚蛋（对不起我粗鲁了），后来还是看了很多代码，跟我以前学android差不多，照着葫芦画瓢，然后就是创新。
  
  * 7.吸收：最近我当了一个代码（ https://github.com/hanks-zyh/Hrn ）发现在每一个界面都在处理返回键，其实做Android写BaseActivity已经习惯了这种思维，重复的操作为啥子不能写在BaseClass中呢？其实我不是很了解ES6 ，我只是熟悉了它的语法已经结构，看得懂。但是多年的开发经验告诉我（2年），这个东西应该是可以继承的，而且肯定可以统一处理，然后就写了一个BaseView，没想到，果然可以，哈哈哈。（ https://github.com/ray0807/react_native/blob/master/hello_react/views/BaseView.js ）


## 2016-06-29

  * 1.按照官网命令行安装RN出现失败   

   解决方法：多试几次
  
  * 2.运行第一个rn程序（android），首先得下载sdk tool（23.01），也可以修改成自己已经下载好的sdk tool ，具体位置是app：build.gradle

   解决方法：下载sdk tool（23.01）； 修改：app：build.gradle
  
  * 3.调试（太坑了）
  
  * 4.【genymotion】  window7（window10的bug在youtobe上也有说明）上安装最新版本的genymotion，然后下载image，再启动，你会发现根本起不来（unable to start virtul device）,我去···心中真的是万马奔腾啊 ，官网怎么会错呢，再我的不懈努力下（其实是运气好）。
    
  * 5.解决方案：virtulBox的问题，去virtulbox官网下载最新版本，覆盖安装，这也是最重要的一步，然后[猛戳这里配置](http://www.zhuantilan.com/jiqiao/31075.html)  如果只配置是没有办法的，只有这两步配合使用才能修好这个问题
  
  * 6.【真机测试】android 5.0以下的不能使用USB的adb reverse，所以只能配置wifi。
   
  * 7. 解决方案：本狗是4.4的小三，最后没办法，只能刷机（genymotion实在是太慢了），配置rn配置wifi教程很多，请自行搜索。
