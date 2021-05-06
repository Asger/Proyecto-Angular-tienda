import { Component, OnInit } from '@angular/core';

//Importo el group form
import {FormGroup, FormControl} from '@angular/forms'; 

//Importo el servicio de autentiación
import { AuthService } from '../services/auth.service';

//Importo el router para direccionar 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async onRegister(){
    const {email, password}=this.registerForm.value;
    try{
      const user = await this.authSvc.register(email, password);
      if(user){
        //redireccionó al home cuando este logueado
        this.router.navigate(['/home']);
      }
    }
    catch(error){
      console.log(error);
    }
  }

  
}
