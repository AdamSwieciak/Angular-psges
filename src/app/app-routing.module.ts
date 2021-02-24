import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { MainContentComponent } from "./Components/main-content/main-content.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'} ,
  {path: 'main', component: MainContentComponent } ,
  {path: 'login', component: AuthComponent } ,
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
