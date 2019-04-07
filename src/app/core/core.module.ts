import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [HeaderComponent, MainComponent, FooterComponent, LayoutComponent],
  imports: [CommonModule],
  exports: [LayoutComponent],
  bootstrap: [LayoutComponent]
})
export class CoreModule {}
