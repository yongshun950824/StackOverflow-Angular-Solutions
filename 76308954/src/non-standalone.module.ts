import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [UsersComponent],
  providers: [UsersService],
  exports: [MatTableModule, UsersComponent],
})
export class NonStandaloneModule {}
