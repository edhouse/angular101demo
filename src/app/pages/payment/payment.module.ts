import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../shared/material.module';
import { FormComponent } from './form/form.component';
import { SummaryComponent } from './summary/summary.component';
import { PaymentComponent } from './payment.component';
import { PaymentService } from './payment.service';
import { AccountLabelPipe } from './account-label.pipe';

@NgModule({
  declarations: [
    AccountLabelPipe,
    FormComponent,
    SummaryComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
    PaymentService,
  ],
  exports: [
    PaymentComponent
  ]
})
export class PaymentModule {
}
