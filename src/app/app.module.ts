import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationTabModule } from './template/navigation-tab/navigation-tab.module';
import { FooterComponent } from './module/footer/footer.component';
import { LoginModalModule } from './template/login-modal/login-modal.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JobsModule } from './pages/jobs/jobs.module'
import { HeaderComponent } from './module/header/header.component';
import { AsideComponent } from './module/aside/aside.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpErrorInterceptors} from './services/interceptors/HttpErrorInterceptors';
import { TimelineComponent } from './module/timeline/timeline.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuPipe } from './pipe/menu.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AsideComponent,
    TimelineComponent,
    MenuPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NavigationTabModule,
    LoginModalModule,
    HttpClientModule,
    JobsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpErrorInterceptors,
      multi : true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
