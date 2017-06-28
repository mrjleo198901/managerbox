import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { CardComponent } from './components/card/card.component';
//import { NguiTabModule } from '@ngui/tab';
import { DialogComponent } from './components/dialogLogin/dialog.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { PersonalComponent } from './components/personal/personal.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { TabsDemoComponent } from './com-impl/tabs/tabs-demo.component';
import { TabsModule } from './com/tabs/tabs.module';
import { AlertDemoComponent } from './com-impl/alert/alert-demo.component';
import { AlertModule } from './com/alert/alert.module';
//import { Ng2SmartTableModule } from 'ng2-smart-table';
//import { Ng2TableModule } from 'ng2-table/ng2-table';
//import { DatePickerModule } from 'ng2-datepicker';
//import {DatePickerModule} from 'ng2-datepicker-bootstrap';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'card', component: CardComponent, canActivate: [AuthGuard] },
  { path: 'facturacion', component: FacturacionComponent, canActivate: [AuthGuard] },
  { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] },
  { path: 'personal', component: PersonalComponent, canActivate: [AuthGuard] },
  { path: 'administracion', component: AdministracionComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    CardComponent,
    DialogComponent,
    FacturacionComponent,
    ClientesComponent,
    PersonalComponent,
    AdministracionComponent,
    TabsDemoComponent,
    AlertDemoComponent
    //Ng2TableModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
  //  NguiTabModule,
    TabsModule,
    AlertModule,
    //Ng2SmartTableModule,
    RouterModule.forRoot([
      {
        path: 'tabs',
        component: TabsDemoComponent
      }
    ]),
    RouterModule.forRoot([
      {
        path: 'alert',
        component: AlertDemoComponent
      }
    ])

    //Angular2FontawesomeModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
