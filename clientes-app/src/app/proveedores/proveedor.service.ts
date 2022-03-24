import { Injectable } from '@angular/core';
import { Proveedor } from './proveedor';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PROVEEDORES } from './proveedores.json';
import { map } from 'rxjs';

@Injectable({

  providedIn: 'root'

})

export class ProveedorService {

  private urlEndPoint:string = 'http://Localhost:8080/api/proveedores'
  constructor(private http: HttpClient) { }

  getProveedores(): Observable<Proveedor[]>{
    
    //return of (PROVEEDORES);
    return this.http.get<Proveedor[]>(this.urlEndPoint);
  }
}
