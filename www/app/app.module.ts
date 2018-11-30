import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HighlightEventsPage } from '../pages/highlight-events/highlight-events';
import { SearchByDepartmentPage } from '../pages/search-by-department/search-by-department';
import { SearchByVenuePage } from '../pages/search-by-venue/search-by-venue';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { AccountInfoPage } from '../pages/account-info/account-info';
import { RegisteredEventPage } from '../pages/registered-event/registered-event';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HighlightEventsPage,
    SearchByDepartmentPage,
    SearchByVenuePage,
    TabsControllerPage,
    LoginPage,
    AccountInfoPage,
    RegisteredEventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HighlightEventsPage,
    SearchByDepartmentPage,
    SearchByVenuePage,
    TabsControllerPage,
    LoginPage,
    AccountInfoPage,
    RegisteredEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}