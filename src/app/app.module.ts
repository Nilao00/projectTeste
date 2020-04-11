import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacaoComponentsComponent } from './autenticacao-components/autenticacao-components.component';
import { ListElementsComponent } from './list-elements/list-elements.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from './Services/GuardRouter/AuthGuard';
import { SearchUserPipe } from './list-elements/search-user.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ServiceOnlineOfflineService } from './Services/service-online-offline.service';

@NgModule({
  declarations: [
    AppComponent,
    AutenticacaoComponentsComponent,
    ListElementsComponent,
    SearchUserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthGuard,ServiceOnlineOfflineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
