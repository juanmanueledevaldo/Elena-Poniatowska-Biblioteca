//MODULE
import { BrowserModule } from '@angular/platform-browser'
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import 
{
  MDBBootstrapModule,
  DropdownModule,
  CheckboxModule,
  WavesModule,
  ButtonsModule,
  InputsModule,
  IconsModule,
  CardsModule
}from 'angular-bootstrap-md'
import 
{ 
  FormsModule, 
  ReactiveFormsModule 
} from '@angular/forms'
//MODULE//////////////////////////////////////////////////////////////////////////////////
//COMPONENT
import { AppComponent } from './app.component';
import { CardsComponent } from './Components/cards/cards.component';
import { LoanComponent } from './Components/loan/loan.component'
import { UserComponent } from './Components/user/user.component'
import { BookComponent } from './Components/book/book.component'
import { FooterComponent } from './Components/footer/footer.component'
import { HomeComponent } from './Components/home/home.component'
import { LoginComponent } from './Components/login/login.component'
import { NavBarComponent } from './Components/nav-bar/nav-bar.component'
import { ErrorComponent } from './Errors/error/error.component'
import { DetailbookComponent } from './Components/detailbook/detailbook.component'
import { AddEditUserComponent } from './Components/add-edit-user/add-edit-user.component'
import { LogComponent } from './Components/log/log.component'
//COMPONENT//////////////////////////////////////////////////////////////////////////////////
//SERVICE
import { BookService } from './Service/book.service'
import { DetailService } from './Service/detail.service'
import { UserService } from './Service/user.service'
import { LoanService } from './Service/loan.service'
//SERVICE//////////////////////////////////////////////////////////////////////////////////


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    LoanComponent,
    UserComponent,
    BookComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    ErrorComponent,
    DetailbookComponent,
    AddEditUserComponent,
    LogComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule, NgbModule,
    ReactiveFormsModule,
    
    DropdownModule, DropdownModule.forRoot(),
    CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule
  ],
  providers: [
    BookService,
    DetailService,
    UserService,
    LoanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
