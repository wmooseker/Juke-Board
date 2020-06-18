import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(m=> m.UserModule)
  },
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
