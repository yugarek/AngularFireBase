import { RouterModule, Routes } from '@angular/router';
import {RegistroaddComponent} from "./registroadd/registroadd.component";
import {RegistroviewComponent} from "./registroview/registroview.component";

const app_routes: Routes = [
  { path: 'view', component: RegistroviewComponent },
  { path: 'addnew', component: RegistroaddComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'view' }
];

export const app_routing = RouterModule.forRoot(app_routes);
