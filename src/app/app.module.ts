import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
// import { WavesModule, InputsModule, ButtonsModule } from 'ng-uikit-pro-standard';
import { WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon'
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { SearchPageService } from './components/search-page/search-page.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    WavesModule,
    HttpClientModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    InputsModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatCardModule,
    ButtonsModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [SearchPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
