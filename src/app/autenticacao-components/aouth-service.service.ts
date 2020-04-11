import { Injectable } from '@angular/core';
import { MethodsDefault } from "../Services/urlMethods/methodsDefault";
@Injectable({
  providedIn: 'root'
})
export class AouthServiceService {

  constructor(private method: MethodsDefault) { 
    window.addEventListener('online', () => console.log('esta online'));
    window.addEventListener('offline', () => console.log('esta offline'));
  }
  /* Login service */
  loginService(url: string, body: any, params: string, token: boolean) {
    return this.method.methodPost(url, body, params, token);
  }
  /* Register user */
  registerService(url: string, body: any, params: string, token: boolean) {
    return this.method.methodPost(url, body, params, token);
  }
}
