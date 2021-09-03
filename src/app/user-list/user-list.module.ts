import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { UserListComponent } from './user-list.component';
import { UserCompComponent } from './user-comp/user-comp.component';


@NgModule({
  declarations: [UserCardComponent, UserListComponent, UserCompComponent],
  imports: [
    CommonModule,
    UserListRoutingModule
  ],
  exports: [UserListComponent, UserCardComponent]
})
export class UserListModule { }
