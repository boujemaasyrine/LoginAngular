import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private baseUrl: string = '/api/User';
    constructor(private http:HttpClient) {}

    loginUser(loginObj: any): Observable<any> {
        const url = `${this.baseUrl}/Login`;
        return this.http.post<any>(url, loginObj);
    }
    createNewUser(signUpObj: any): Observable<any> {
        const url = `${this.baseUrl}/CreateNewUser`;
        return this.http.post<any>(url, signUpObj);
    }


}