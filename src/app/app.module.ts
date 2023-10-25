import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostTableComponent } from './cost-table/cost-table.component';
import { CostComponent } from './cost/cost.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthInterceptorService } from './service/auth-interceptor.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    CostComponent,
    NavbarComponent,
    CostTableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  },
  {
    provide: LOCALE_ID,
    useValue: 'pt-BR', // Aqui você define o LOCALE_ID para 'pt-BR'
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
