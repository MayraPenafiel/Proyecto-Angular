import { Component, OnInit } from '@angular/core';
import { Proveedor } from './proveedor';
import { ProveedorService } from './proveedor.service';
import { PROVEEDORES } from './proveedores.json';

@Component({

  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',

})

export class ProveedoresComponent implements OnInit {

  proveedores: Proveedor[] = [];
  
  constructor(private proveedorService: ProveedorService) { }

  ngOnInit() {

    this.proveedorService.getProveedores().subscribe(
      proveedores => this.proveedores = proveedores
    );

  }

}
