import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

const routes: Routes = [{
  path:'about',component:AboutComponent
},
  { path:'home',component:HeaderComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
