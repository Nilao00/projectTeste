import { Injectable } from '@angular/core';
import { MethodsDefault } from "../Services/urlMethods/methodsDefault";
@Injectable({
  providedIn: 'root'
})
export class ListElementServiceService {

  constructor(private method: MethodsDefault) { }

  /* listElements */
  listElementsService(url: string, params: string, token: boolean) {
    return this.method.methodGet(url, params, token);
  }
}
