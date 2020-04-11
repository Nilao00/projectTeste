import { Injectable } from '@angular/core';
import { MethodsDefault } from "../Services/urlMethods/methodsDefault";
import { ServiceOnlineOfflineService } from '../Services/service-online-offline.service';

@Injectable({
  providedIn: 'root'
})
export class ListElementServiceService {

  constructor(private method: MethodsDefault, public onlineOffline: ServiceOnlineOfflineService) { }

  /* listElements */
  listElementsService(url: string, params: string, token: boolean) {
    return this.method.methodGet(url, params, token);
  }
}
