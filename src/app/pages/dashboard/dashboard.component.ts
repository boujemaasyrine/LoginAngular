import { Component } from '@angular/core';
import {UploaderModule} from "@syncfusion/ej2-angular-inputs";
import * as CryptoJS from 'crypto-js';
import {Constant} from "../../constants";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UploaderModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public dropElement?: HTMLElement;
  descriptedName: string='';
  ngOnInit(){
    this.dropElement = document.getElementById('droparea') as HTMLElement;
    const uName= localStorage.getItem('userName');
    this.descriptedName=this.decriptData(uName)
    console.log(this.descriptedName)
  }
  decriptData(data: any){
    const descriptVal=CryptoJS.AES.decrypt(data,Constant.EN_KEY);
    return descriptVal.toString(CryptoJS.enc.Utf8);
  }
  public path:Object ={
    saveUrl:'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
    removeUrl:'https://services.syncfusion.com/angular/production/api/FileUploader/Remove',
    chunkSize: 102400
  }

}
