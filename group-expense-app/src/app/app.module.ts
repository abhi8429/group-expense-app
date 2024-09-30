import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { GroupListComponent } from './group/group-list/group-list.component';
import { GroupDetailComponent } from './group/group-detail/group-detail.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { ExpenseDetailComponent } from './expense/expense-detail/expense-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GroupListComponent,
    GroupDetailComponent,
    ExpenseListComponent,
    ExpenseDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
