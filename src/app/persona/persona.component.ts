import { Component } from '@angular/core';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  constructor(private personas:PersonaService) {}

  registerUser(nombre:any,apellido:any,cedula:any,correo:any,telefono:any,especialidad:any,typeusers_id:any){
    debugger
    this.personas.saveTipo(nombre.value,apellido.value,cedula.vale,correo.value,telefono.value,especialidad.value,typeusers_id).subscribe({
      next:(data)=>{
        
          },
          error:(e)=>{
            debugger
            
          }
    })
     
  }

}
