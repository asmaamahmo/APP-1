import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { GallaryComponent } from './gallary/gallary.component';

const routes: Routes = [
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'about' , component:AboutComponent , title:'About'},
  {path: 'home' , component:AboutComponent , title:'Home'},
  {path: 'gallary', component:GallaryComponent , title: 'Home'},
   {path: 'portfolio' , component:HomeComponent , title:'Portfolio'},
  {path: 'contact' , component:ContactComponent , title:'Contact'},
  {path: '**' , component:NotFoundComponent , title:'NotFound'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
