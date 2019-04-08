import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './landingPage/navbar/navbar.component';
import { FooterComponent } from './landingPage/footer/footer.component';
import { AboutUsComponent } from './landingPage/about-us/about-us.component';
import { LogInComponent } from './landingPage/log-in/log-in.component';
import { SignUpComponent } from './landingPage/sign-up/sign-up.component';
import { ContactComponent } from './landingPage/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    LogInComponent,
    SignUpComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
