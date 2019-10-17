import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AUTH_SESSION } from 'src/app/shared/Constant';
import { catchError, retry } from 'rxjs/operators'
import Swal from 'sweetalert2';

@Injectable()
export class HttpErrorInterceptors implements HttpInterceptor {

    toast: any

    constructor() {

        this.toast = Swal.mixin({
            type: "error",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            animation: false,
            showCloseButton: true,
            allowOutsideClick: false,
            customClass: {
                popup: 'animated tada'
            }
        })

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem(AUTH_SESSION);

        if (token) {
            request = request.clone({
                headers: request.headers.set(
                    'Authorization',
                    `Bearer ${token}`
                )
            });
        }

        return next.handle(request).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let message : string;
                let statusCode : number;

                if (error.error instanceof ErrorEvent) {
                    message = "Connection Error"
                } else {
                    message = error.message
                    statusCode = error.status
                }

                // this.toast.fire({
                //     text : message,
                //     title: `Ups, Something Wrong! (${statusCode})`,
                //     type : "error"
                // })

                return throwError(error)
            })
        )
    }

}