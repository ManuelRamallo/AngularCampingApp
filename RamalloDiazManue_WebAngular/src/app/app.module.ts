import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { LeftmenuComponent } from './shared/leftmenu/leftmenu.component';
import { CampaignListadoComponent } from './components/campaign-listado/campaign-listado.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CampaignComponent } from './components/campaign/campaign.component';
import {CampaignsService} from './services/campaigns.service';
import { MisCampaignListadoComponent } from './components/mis-campaign-listado/mis-campaign-listado.component';
import { MisCampaignComponent } from './components/mis-campaign/mis-campaign.component';
import {CategoriaService} from './services/categoria.service';
import {AportacionService} from './services/aportacion.service';
import { AportacionesComponent } from './components/aportaciones/aportaciones.component';
import { ListaAportacionesComponent } from './components/lista-aportaciones/lista-aportaciones.component';



const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'listadoCampaign', component: CampaignListadoComponent},
  {path: 'listadoMisCampaign', component: MisCampaignListadoComponent},
  {path: 'misAportaciones', component: ListaAportacionesComponent},
  {path: 'registro', component: RegisterComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeftmenuComponent,
    CampaignListadoComponent,
    RegisterComponent,
    HeaderComponent,
    CampaignComponent,
    MisCampaignListadoComponent,
    MisCampaignComponent,
    AportacionesComponent,
    ListaAportacionesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService, CampaignsService, CategoriaService, AportacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
