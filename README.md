# websocketqianduan
本项目测试websocket消息推送系统，ionic+ng-zorro
后台地址https://github.com/kangwenzhuang/websocket

要有前端基础，安装npm，angular7，ionic4，克隆项目，进入项目根目录npm run install，依赖包安装之后，ionic serve，访问网址http://localhost:8100/home

实际中应该是登陆后，把用户信息写到本地储存！这里没有采用这种方式，我们的目的只是测试。这里采用输入页面的方式

输入之后，之所以要输入是因为要赋值socket = new WebSocket('ws://127.0.0.1:8080/socketServer/' + this.username);
跳到http://localhost:8100/websocket（由于后台模拟的只有用户1，2,3,）
测试的时候开3个网页，分别输入1,2,4便能看到效果

![image](https://github.com/kangwenzhuang/websocketqianduan/blob/master/photos/1.png)
