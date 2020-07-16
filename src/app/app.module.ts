import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstComponent } from './first/first.component';
import { NbCardModule } from '@nebular/theme';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { NbButtonModule } from '@nebular/theme';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        // this will enable the default theme, you can change this by passing `{ name: 'dark' }` to enable the dark theme
        BrowserAnimationsModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbLayoutModule,
        NbEvaIconsModule,
        NbIconModule,
    NbCardModule,
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

