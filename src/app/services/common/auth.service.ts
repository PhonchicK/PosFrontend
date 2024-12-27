import { Injectable } from "@angular/core";
import {HttpClientService} from "./http-client.service";
import { Observable, catchError, tap, throwError } from 'rxjs';
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private httpService: HttpClientService)
    {
    }
    login(email:string, password:string)
    {
         var result = this.httpService.post({ controller: 'auth', action: 'login'},
            { email: email, password: password }
        ).pipe(tap((val) => {
            console.log(val);
            if(val.success == true)
            {
                localStorage.setItem("accessToken", val.data.accessToken);
                localStorage.setItem("refreshToken", val.data.refreshToken);
            }
        }), catchError(this.handleError));
    }
    private handleError(error: HttpErrorResponse): Observable<never> {
        console.error('Bir hata oluştu:', error);
        return throwError(() => new Error(error.message || 'Server error'));
    }
}