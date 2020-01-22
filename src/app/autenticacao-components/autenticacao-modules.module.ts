import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { AouthServiceService } from './aouth-service.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[AouthServiceService]
})
export class AutenticacaoModulesModule { }
