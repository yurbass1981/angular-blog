import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../../../shared/interfaces";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    get token(): String {
        return ''
    }

    login(user: User): Observable<any> {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
        .pipe(
            tap(this.setToken)
        )
    }

    logout() {

    }

    isAuthenticated(): boolean {
        return !!this.token
    }

    private setToken(response: any) {
        console.log(response)
    }
}