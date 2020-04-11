import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceOnlineOfflineService {
  private statusConexao$ = new Subject<boolean>();

  constructor() {
    window.addEventListener('online', () => console.log('esta online'));
    window.addEventListener('offline', () => console.log('esta offline'));
  }

  get isOnline(): boolean {
    return !!window.navigator.onLine;
  }

  get statusConexao(): Observable<boolean> {
    return this.statusConexao$.asObservable();
  }

  atualizaStatusConexao() {
    this.statusConexao$.next(this.isOnline);
  }
}
