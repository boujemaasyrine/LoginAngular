import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import {Router} from "@angular/router";
import * as CryptoJS from 'crypto-js';
import {Constant} from "../../constants";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any;
  constructor(private http:HttpClient,private router:Router) {
    this.loginObj = new Login();
  }
  encriptData(data:any) {
    return CryptoJS.AES.encrypt(data,Constant.EN_KEY).toString();
  }
  onLogin(){
  this.http.post('/api/User/Login',this.loginObj).subscribe((res:any) =>{
    if (res.result){
    alert("Login success");
    const enrUserName=this.encriptData(this.loginObj.EmailId)
      localStorage.setItem('userName',enrUserName);
      localStorage.setItem('token', res.data.token);

    this.router.navigateByUrl('/dashboard')
  }else{
    alert(res.message);
  }
  })
  }

}
export class Login{
  EmailId: string;
  Password: string;
  constructor() {
    this.EmailId='';
    this.Password='';
  }

}
