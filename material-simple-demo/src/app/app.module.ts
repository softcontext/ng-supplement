import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { MatRadioModule, MatProgressSpinnerModule, MatSliderModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemoToolbarComponent } from './demo-toolbar/demo-toolbar.component';
import { ProgressSpinnerConfigurableExample } from './progress-spinner/progress-spinner-configurable-example';
import { DatepickerOverviewExample } from './date-picker/datepicker-overview-example';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoToolbarComponent,
    ProgressSpinnerConfigurableExample,
    DatepickerOverviewExample
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
    MatRadioModule, MatProgressSpinnerModule, MatSliderModule, MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
