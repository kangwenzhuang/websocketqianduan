import {Component, HostListener, OnInit} from '@angular/core';
import {UUID} from 'angular2-uuid';
import {skipWhile} from 'rxjs/operators';

@Component({
    selector: 'app-websocket',
    templateUrl: './websocket.page.html',
    styleUrls: ['./websocket.page.scss'],
})
export class WebsocketPage implements OnInit {
    messages: Array<string> = [];
    uuid = UUID.UUID();
    aa = '老康开课了';
    time = 20;
    noticebar: any;
    // content = '{\'content\': \'';
    // font = '\', \'font\':\'14px\'}';
    // noticebar = {'content': '我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！', 'font': '14px'};

    // bb = 'ws://127.0.0.1:8086/socketServer/' + this.uuid;

    socket = new WebSocket('ws://127.0.0.1:8080/socketServer/' + '1');

    show: boolean;
    message: string;

    @HostListener('window:beforeunload', ['$event'])
    doSomething($event) {
        this.CloseWebSocket();
    }

    constructor() {
    }

    ngOnInit() {
        this.show = false;
        console.log('this.uuid:' + this.uuid);
        if (typeof (WebSocket) == 'undefined') {
            console.log('您的浏览器不支持WebSocket');
        } else {
            this.socket.onopen = function () {
                console.log('Socket 已打开');
            };
            //监听后端推送的消息事件
            this.listenSocket();
            //发生了错误事件
            this.socket.onerror = function () {
                alert('Socket发生了错误');
            };
            this.socket.onclose = function () {
                console.log('Socket关闭');
            };
        }
    }

    change() {
        if (this.show) {
            this.show = false;
        } else {
            this.show = true;
        }
        this.messages.shift();
        console.log('this.show:' + this.show);
        // console.log('bb:' + this.bb);
    }

    //监听后端推送的消息事件
    listenSocket() {
        this.socket.onmessage = (msg) => {
            // this.messages.push(msg.data);
            // console.log('length:' + this.messages.length);
            const content = msg.data;
            // if (this.messages.length > 0) {
            //     const content = this.messages[0];
            const font = '14px';

            this.noticebar = {
                content,
                font
            };
            this.show = true;
            console.log('this.show:' + this.show);
            if (this.time = 20) {
                this.setShow();
            }
            console.log('this.show:' + this.show);
            // }
        };
    }

    // 关闭webSocket
    CloseWebSocket() {
        this.socket.close(); // 主动关闭
        //监听关闭事件
        this.socket.onclose = function (e) {
            console.log('Socket已关闭');
            // 关闭操作逻辑
        };
    }

    setShow() {
        if (this.time == 1) {
            console.log(this.time);
            this.show = false;
            this.time = 20;
            return;
        } else {
            console.log(this.time);
            this.time--;
        }
        setTimeout(() => {
            this.setShow();
        }, 1000);

    }

}
