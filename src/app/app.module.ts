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
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
