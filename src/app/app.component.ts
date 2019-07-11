import { Component } from '@angular/core';

// 组件元数据装饰器：告诉Angular，AppComponent是一个组件，
// 需要把一些元数据附加到这个类上，Angular就会把AppComponent当组件来处理
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
//该组件的控制器，编写业务逻辑
export class AppComponent {
  title = 'my-angular-app';
}
