import { Routes } from '@angular/router';
// Ide jönnek az importok:
import { Home } from './home/home';
import { Services } from './services/services';
import { ServiceDetail } from './service-detail/service-detail';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'services', component: Services },
  { path: 'services/:id', component: ServiceDetail }, // Új paraméteres útvonal!
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  
  // Ha valaki csak simán a főoldalra jön (üres az URL), dobjuk át a home-ra!
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  
  // Ha valaki hülyeséget gépel be, akkor hibaoldal helyett most egyből a kezdőlapra dobjuk (céges oldalaknál ez elegánsabb):
  { path: '**', redirectTo: 'home' } 
];