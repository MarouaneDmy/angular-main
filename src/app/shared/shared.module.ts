import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './utils/primeng/primeng.module';
import { InfoIconComponent } from 'src/app/shared/ui/info-icon/info-icon.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [InfoIconComponent, NavbarComponent],
  imports: [CommonModule, ReactiveFormsModule, PrimeNGModule, HttpClientModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNGModule,
    HttpClientModule,
    InfoIconComponent,
    NavbarComponent,
  ],
})
export class SharedModule {}
