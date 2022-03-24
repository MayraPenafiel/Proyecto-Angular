import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes } from '@angular/router';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProveedorService } from './proveedores/proveedor.service';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes =[

  {path: '',redirectTo: '', pathMatch:'full'},
  {path: 'clientes',component: ClientesComponent},
  {path: 'Proveedores', component: ProveedoresComponent},
  {path: 'clientes/form',component: FormComponent}

];

@NgModule({

  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    ProveedoresComponent,
    FormComponent

  ],

  imports: [

    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ClienteService, ProveedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
