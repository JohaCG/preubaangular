import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  saveTipo(nombre:any,apellido:any,cedula:any,correo:any,telefono:any,especialidad:any,typeusers_id:any){

    return this.http.post('http://localhost:3000/api/register',{
      nombre : nombre ,
      apellido : apellido ,
      cedula:cedula,
      correo:correo,
      telefono:telefono,
      especialidad:especialidad,
      typeusers_id:typeusers_id
    }
    
    )
}}
