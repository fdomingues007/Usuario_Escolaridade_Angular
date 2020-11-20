import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgxMaskModule } from 'ngx-mask';

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UsuarioComponent } from '../../pages/usuario/usuario.component';
import { UsuarioEditarComponent } from 'src/app/pages/usuario-editar/usuario-editar.component';
import { UsuarioNovoComponent } from 'src/app/pages/usuario-novo/usuario-novo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UsuarioComponent,
    UsuarioEditarComponent,
    UsuarioNovoComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
  ]
  
})
export class AdminLayoutModule { }
