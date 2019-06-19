# websocketqianduan
本项目测试websocket消息推送系统，ionic+ng-zorro
后台地址https://github.com/kangwenzhuang/websocket


要有前端基础，安装npm，angular7，ionic4，克隆项目，进入项目根目录npm run install，依赖包安装之后，ionic serve，访问网址http://localhost:8100/home

实际中应该是登陆后，把用户信息写到本地储存！这里没有采用这种方式，我们的目的只是测试。这里采用输入页面的方式
![image](https://github.com/kangwenzhuang/websocketqianduan/blob/master/photos/1.png)
输入之后，之所以要输入是因为要赋值socket = new WebSocket('ws://127.0.0.1:8080/socketServer/' + this.username);
跳到http://localhost:8100/websocket（由于后台模拟的只有用户1，2,3,）
测试的时候开3个网页，分别输入1,2,4便能看到效果
![image](https://github.com/kangwenzhuang/websocketqianduan/blob/master/photos/2.png)
然后测试服务器接口http://localhost:8080/getOnlineNum和http://localhost:8080/getOnlineUsers
![image](https://github.com/kangwenzhuang/websocketqianduan/blob/master/photos/3.png)
![image](https://github.com/kangwenzhuang/websocketqianduan/blob/master/photos/4.png)

最后就是模拟服务器推送消息，例如开始签到，会有签到通知，服务器推送给客户端
老师点击开始签到，触发localhost:8080/beginqiandao?course=打天下，开始推送
会给12推送消息，显示5秒
![image](https://github.com/kangwenzhuang/websocketqianduan/blob/master/photos/5.png)



目前存在为问题，可以改进的地方，当两个通知相离很近的时候，后一个会把前一个挤掉，
问题尚未解决，有个想法就是把socket = new WebSocket('ws://127.0.0.1:8080/socketServer/' + this.username);放在一个队列，保证每个提醒都是3秒，但是尚未解决
