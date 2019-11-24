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
import { LogComponent } from './Components/log/log.component'
//COMPONENT/////////////////////////////////////////////////////////
//MODULE
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddEditLoanComponent } from './Components/add-edit-loan/add-edit-loan.component'
//MODULE/////////////////////////////////////////////////////////



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'loans', component: AddEditLoanComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'loan', component: LoanComponent },
  { path: 'loan/:id', component: LoanComponent },
  { path: 'mantenimiento', component: AddEditUserComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'book', component: BookComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'detail/:id', component: DetailbookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'log', component: LogComponent },
  { path: '**', component: ErrorComponent },
  
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
