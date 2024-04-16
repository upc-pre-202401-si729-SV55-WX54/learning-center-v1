import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {ContactComponent} from "./public/pages/contact/contact.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'learning/students', component: StudentsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
