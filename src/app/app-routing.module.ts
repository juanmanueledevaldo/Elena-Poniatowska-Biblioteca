//COMPONENT
import { RouterModule, Routes } from '@angular/router'
import { CardsComponent } from './Components/cards/cards.component'
import { LoanComponent } from './Components/loan/loan.component'
import { UserComponent } from './Components/user/user.component'
import { HomeComponent } from './Components/home/home.component'
import { BookComponent } from './Components/book/book.component'
import { ErrorComponent } from './Errors/error/error.component'
import { LoginComponent } from './Components/login/login.component'
import { DetailbookComponent } from './Components/detailbook/detailbook.component'
import { AddEditUserComponent } from './Components/add-edit-user/add-edit-user.component'
import { PdfstudentsComponent } from './Components/pdfstudents/pdfstudents.component'


//COMPONENT/////////////////////////////////////////////////////////
//MODULE
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddEditLoanComponent } from './Components/add-edit-loan/add-edit-loan.component'
import { AuthGuard } from './Components/auth/auth.guard';
import {AuthAdmin} from './Components/auth/authadmin.guard';
import { AddEditBookComponent } from './Components/add-edit-book/add-edit-book.component'
//MODULE/////////////////////////////////////////////////////////



const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[AuthAdmin] },
  { path: 'home', component: HomeComponent },
  { path: 'loans', component: AddEditLoanComponent, canActivate:[AuthAdmin, AuthGuard] },
  { path: 'cards', component: CardsComponent },
  { path: 'loan', component: LoanComponent, canActivate:[AuthGuard, AuthAdmin] },
  { path: 'loan/:id', component: LoanComponent, canActivate:[AuthGuard] },
  { path: 'manage', component: AddEditUserComponent, canActivate:[AuthGuard, AuthAdmin] },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserComponent, canActivate:[AuthGuard, AuthAdmin] },
  { path: 'book', component: BookComponent, canActivate: [AuthAdmin, AuthGuard] },
  { path: 'book/:id', component: BookComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: DetailbookComponent },
  { path: 'login', component: LoginComponent  },
  { path: 'pdfstudents', component: PdfstudentsComponent, canActivate:[AuthGuard, AuthAdmin]},
  {path: 'books', component: AddEditBookComponent,  canActivate:[AuthAdmin, AuthGuard]},
  { path: '**', component: ErrorComponent },
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
