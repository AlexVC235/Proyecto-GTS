import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PublishAdComponent } from './components/publish-ad/publish-ad.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CookieConsentComponent } from './components/cookie-consent/cookie-consent.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactarComponent } from './components/contactar/contactar.component';
import { TextosLegalesComponent } from './components/textos-legales/textos-legales.component';
import { ControlComponent } from './components/control/control.component';
import { PreciosComponent } from './components/precios/precios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavoritesComponent,
    PublishAdComponent,
    LoginComponent,
    CreateAccountComponent,
    CookieConsentComponent,
    MenuComponent,
    ContactarComponent,
    TextosLegalesComponent,
    ControlComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      // { path: '', component: HeaderComponent },
      { path: 'publicar', component: PublishAdComponent },
      { path: 'login', component: LoginComponent },
      { path: 'nueva-cuenta', component: CreateAccountComponent },
      { path: 'favoritos', component: FavoritesComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'contactar', component: ContactarComponent },
      { path: 'terminos-y-condiciones', component: TextosLegalesComponent },
      { path: 'control', component: ControlComponent },
      { path: 'precios', component: PreciosComponent }
    ]),
    ReactiveFormsModule,
    RecaptchaModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
