import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { DesignComponent } from './design/design.component';
import { FooterComponent } from './design/footer/footer.component';

@NgModule({
  declarations: [FooterComponent, DesignComponent],
  imports: [CommonModule, AppRoutingModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  exports: [DesignComponent]
})
export class CoreModule {}
