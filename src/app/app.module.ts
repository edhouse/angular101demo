import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { appConfigProviders } from './app.config';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './http-interceptors/providers';
import { NavigationModule } from './navigation/navigation.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NavigationModule,
    AuthModule,
    PagesModule,
  ],
  providers: [
    appConfigProviders,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
