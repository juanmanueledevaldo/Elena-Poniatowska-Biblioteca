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

const routes: Routes = [
  { path: 'cards', component:CardsComponent  },
  { path: 'prestamo', component:LoanComponent  },
  {path: 'usuario', component:UserComponent},
  {path: 'book', component:BookComponent},  
  {path:'book/:id', component:BookComponent},

  {path: '', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: '**', component: ErrorComponent},
{path:'login', component:LoginComponent},
{path: 'agregarlibro', component: BookComponent},
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)
  
  
  ],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
