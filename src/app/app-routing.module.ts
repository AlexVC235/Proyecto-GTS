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
import { PreciosTravestisComponent } from './components/precios-travestis/precios-travestis.component';
import { PreciosHombresComponent } from './components/precios-hombres/precios-hombres.component';
import { PreciosMasajesMujeresComponent } from './components/precios-masajes-mujeres/precios-masajes-mujeres.component';
import { PreciosMasajesTravestisComponent } from './components/precios-masajes-travestis/precios-masajes-travestis.component';
import { PreciosMasajesHombresComponent } from './components/precios-masajes-hombres/precios-masajes-hombres.component';
import { PreciosVideollamadasMujeresComponent } from './components/precios-videollamadas-mujeres/precios-videollamadas-mujeres.component';
import { PreciosVideollamadasTravestisComponent } from './components/precios-videollamadas-travestis/precios-videollamadas-travestis.component';
import { PreciosVideollamadasHombresComponent } from './components/precios-videollamadas-hombres/precios-videollamadas-hombres.component';


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
  { path: 'precios-travestis', component: PreciosTravestisComponent },
  { path: 'precios-hombres', component: PreciosHombresComponent },
  { path: 'precios-masajes-mujeres', component: PreciosMasajesMujeresComponent },
  { path: 'precios-masajes-travestis', component: PreciosMasajesTravestisComponent },
  { path: 'precios-masajes-hombres', component: PreciosMasajesHombresComponent },
  { path: 'precios-videollamadas-mujeres', component: PreciosVideollamadasMujeresComponent },
  { path: 'precios-videollamadas-travestis', component: PreciosVideollamadasTravestisComponent },
  { path: 'precios-videollamadas-hombres', component: PreciosVideollamadasHombresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
