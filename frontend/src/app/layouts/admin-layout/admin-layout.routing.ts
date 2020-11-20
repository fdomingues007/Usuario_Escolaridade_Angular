import { Routes } from "@angular/router";
import { UsuarioEditarComponent } from 'src/app/pages/usuario-editar/usuario-editar.component';
import { UsuarioNovoComponent } from 'src/app/pages/usuario-novo/usuario-novo.component';
import { UsuarioComponent } from 'src/app/pages/usuario/usuario.component';

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "usuario", component: UsuarioComponent },
  { path: "usuario-novo", component: UsuarioNovoComponent },
  { path: "usuario-editar/:id", component: UsuarioEditarComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
];
