import { Component } from '@angular/core';
import { ApiProv } from '../providers/api.prov';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
public email:string='';
public password:string='';

  constructor(private apiProv:ApiProv){
    if(apiProv.isAuthenticatedUser()){
      window.location.href = '/books';
    }
  }

  public login(){
    const data = {
      email: this.email,
      password: this.password
    }
    this.apiProv.login(data).then((response)=>{
      console.log(response);
      if(response.token){
        localStorage.setItem('token',response.token);
        window.location.href = '/books';
      }
    })
  }
}
