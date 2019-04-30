import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, BrowserAnimationsModule, HomeModule, HttpClientModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
