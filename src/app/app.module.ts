import { BrowserModule } from '@angular/platform-browser';
//Angular核心模块
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives he re
import { AppRoutingModule } from './app-routing.module';
//根组件
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { FormComponent } from './components/form/form.component';

//@NgModule装饰器接受一个元数据对象
@NgModule({
  // 声明模块里有什么东西 只能声明：组件/指令/管道
  declarations: [
    AppComponent,   
    MainComponent,
    HeroesComponent,
    HeaderComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    FormComponent
  ],
  imports: [ //依赖模块
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{dataEncapsulation:false}
    ),
    FormsModule
  ],
  providers: [], //依赖注入所需服务
  bootstrap: [AppComponent] //根组件
})

//根模块不需要导出任何东西
export class AppModule { }
