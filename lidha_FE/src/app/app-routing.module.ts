import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlobComponent } from './pages/blob/blob.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LicenceComponent } from './pages/licence/licence.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlobComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'license', component: LicenceComponent },
  { path: 'services', component: ServiceComponent },



  

  // { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
