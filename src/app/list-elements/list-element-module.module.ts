import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserPipe } from './search-user.pipe';


@NgModule({
  declarations: [],
  entryComponents:[SearchUserPipe],
  imports: [
    CommonModule,
    SearchUserPipe
  ]
})
export class ListElementModuleModule { }
