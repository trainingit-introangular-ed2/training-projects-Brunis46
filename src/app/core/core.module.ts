import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../home/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './layout/main/main.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MainComponent, FooterComponent, HomeComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [LayoutComponent]
})
export class CoreModule {}
