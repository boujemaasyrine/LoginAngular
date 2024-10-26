import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";;
import {UserService} from "../../../services/user.service";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";


@Component({
  selector: 'app-signup',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink,MatSnackBarModule
    ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    signUpObj:any;
    constructor(private router:Router, private userService: UserService ,private snackBar: MatSnackBar) {
        this.signUpObj = new SignUp();
    }
    onSignUp(){
        this.userService.createNewUser(this.signUpObj).subscribe((res:any) =>{
            if (res.result){
                this.snackBar.open('Account created successfully', '', {
                    duration: 2000,
                    panelClass: ['success-snackbar'],
                });
                setTimeout(() => {
                    this.router.navigateByUrl('/login');
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
export class SignUp{
    firstName: string;
    middleName: string;
    lastName: string;
    mobileNo: string;
    altMobileNo:string;
    emailId: string;
    password: string;

    constructor() {
        this.firstName="";
        this.middleName="";
        this.lastName="";
        this.mobileNo="";
        this.altMobileNo="";
        this.emailId='';
        this.password='';
    }

}

