import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from './utils/primeng/primeng.module';
import { InfoIconComponent } from 'src/app/shared/ui/info-icon/info-icon.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
      InfoIconComponent,
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      PrimeNGModule,
      HttpClientModule,
    ],
    exports: [
      CommonModule,
      ReactiveFormsModule,
      PrimeNGModule,
      HttpClientModule,
      InfoIconComponent
    ]
  })
  export class SharedModule { }