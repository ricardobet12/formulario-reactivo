import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MaterialComponent } from './material/material.component';
import { FormUsuarioComponent } from './material/form-usuario/form-usuario.component';
import { TablaUsuarioComponent } from './material/tabla-usuario/tabla-usuario.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {ButtonModule} from 'primeng/button';
import { PrimeComponent } from './prime/prime.component';
import { TableUserComponent } from './prime/table-user/table-user.component';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {SliderModule} from 'primeng/slider';
import {InputTextModule} from 'primeng/inputtext';
import { FormularioUsuarioComponent } from './prime/formulario-usuario/formulario-usuario.component';
import { MenuComponent } from './menu/menu.component';
import {SidebarModule} from 'primeng/sidebar';
import {ToolbarModule} from 'primeng/toolbar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    FormUsuarioComponent,
    TablaUsuarioComponent,
    ConfirmDialogComponent,
    PrimeComponent,
    TableUserComponent,
    FormularioUsuarioComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    InputTextModule,
    SidebarModule,
    ConfirmDialogModule,
    ToolbarModule,
    PanelMenuModule,
    MessagesModule,
    MessageModule,
    ToastModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
