import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApierrorComponent  } from './apierror/apierror.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiinterceptorInterceptor } from './apiinterceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ApierrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:[{ provide: HTTP_INTERCEPTORS, useClass:ApiinterceptorInterceptor , multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
