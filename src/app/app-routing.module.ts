import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './Components/cards/cards.component';
import { LoanComponent } from './Components/loan/loan.component';
import { UserComponent } from './Components/user/user.component';
import { HomeComponent } from './Components/home/home.component';
import { BookComponent } from './Components/book/book.component';
import { ErrorComponent } from './Errors/error/error.component';
import { LoginComponent } from './Components/login/login.component';
import { DetailbookComponent } from './Components/detailbook/detailbook.component';
import { AddEditUserComponent } from './Components/add-edit-user/add-edit-user.component';
import { LogComponent } from './Components/log/log.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'prestamo', component: LoanComponent },
  { path: 'prestamo/:id', component: LoanComponent },
  { path: 'usuario', component: UserComponent },
  { path: 'libro', component: BookComponent },
  { path: 'agregarlibro', component: BookComponent },
  { path: 'mantenimientousuario', component: AddEditUserComponent },
  { path: 'book/:id', component: DetailbookComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: ErrorComponent },
  { path: 'login', component: LoginComponent },
  
  { path: 'log', component: LogComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
