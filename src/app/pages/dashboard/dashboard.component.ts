import {Component, OnInit} from '@angular/core';
import {UploaderModule} from "@syncfusion/ej2-angular-inputs";
import * as CryptoJS from 'crypto-js';
import {Constant} from "../../constants";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UploaderModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  userDetails:any="";

  constructor(private http:HttpClient) {

  }
  ngOnInit() {
    this.getUserDetails();
  }
  getUserDetails(){
    const userId=10;
    this.http.get(`/api/User/GetUserByUserId?userId=${userId}`).subscribe((res:any)=>
        {this.userDetails = res
          console.log(this.userDetails,"OKKK")
        },error =>{
        alert("Error from API")
        }
    )
  }


}
