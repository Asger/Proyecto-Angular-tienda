import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

//Importo el router para direccionar 
import { Router } from '@angular/router'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  public user$: Observable <any> = this.authSvc.afAuth.user;

  constructor(
    private authSvc: AuthService,
    private router: Router
  ){}
  
  async onLogout(){
    try{
      await this.authSvc.logout();
      /* this.router.navigate(['/login']); */
    }
    catch(error){
      console.log(error);
    }
    
  }
}
