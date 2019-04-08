import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { AboutUsComponent } from './landing-page/about-us/about-us.component';
import { LogInComponent } from './landing-page/log-in/log-in.component';
import { SignUpComponent } from './landing-page/sign-up/sign-up.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    LogInComponent,
    SignUpComponent,
    ContactComponent,
    LandingPageComponent
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
