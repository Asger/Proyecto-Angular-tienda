import { Component, OnInit } from '@angular/core';

//Importo el group form
import {FormGroup, FormControl} from '@angular/forms'; 

//Importo el servicio de autentiación
import { AuthService } from '../services/auth.service'; 

//Importo el router para direccionar 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const {email,password} = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email,password);
      if(user){
        //redireccionó al home cuando este logueado
        this.router.navigate(['/home']);
        console.log(user);
      }
    }
    catch(error){
      console.log(error);
    }
  }

  async onGoogleLogin(){
    //debe ir al servicio para buscar el metodo
    try{
      const user = await this.authSvc.loginGoogle();
      if(user){
        //redireccionó al home cuando este logueado
        this.router.navigate(['/home']);
        console.log(user);
      }
    }
    catch(error){
      console.log(error);
    }
  }
}
