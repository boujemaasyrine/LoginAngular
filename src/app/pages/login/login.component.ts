import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {Router, RouterLink} from "@angular/router";
import {UserService} from "../../services/user.service";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterLink,MatSnackBarModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:any;
  constructor(private router:Router, private userService: UserService, private snackBar: MatSnackBar) {
    this.loginObj = new Login();
  }
  onLogin(){
    this.userService.loginUser(this.loginObj).subscribe((res:any) =>{
    if (res.result){
      this.snackBar.open('Login success', '', {
        duration: 2000,
        panelClass: ['success-snackbar'],
      });
    localStorage.setItem('token', res.data.token);
      setTimeout(() => {
        this.router.navigateByUrl('/dashboard');
      }, 2000);

  }else{
      this.snackBar.open(res.message, '', {
        duration: 2000,
        panelClass: ['error-snackbar'],
      });
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
