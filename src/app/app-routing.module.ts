import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PublishAdComponent } from './components/publish-ad/publish-ad.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactarComponent } from './components/contactar/contactar.component';
import { TextosLegalesComponent } from './components/textos-legales/textos-legales.component';
import { ControlComponent } from './components/control/control.component';
import { PreciosComponent } from './components/precios/precios.component';


const routes: Routes = [
  { path: 'publicar', component: PublishAdComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nueva-cuenta', component: CreateAccountComponent },
  { path: 'favoritos', component: FavoritesComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'contactar', component: ContactarComponent },
  { path: 'textos-legales', component: TextosLegalesComponent },
  { path: 'control', component: ControlComponent },
  { path: 'precios', component: PreciosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
