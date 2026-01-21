import { Component, inject, Input, computed } from '@angular/core';

import { InvestmentResult } from '../models/investment-result.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {    

  private readonly investmentService = inject(InvestmentService);

  //Whit signals
  // results = computed(() => this.investmentService.resultData())
  //or
  results = this.investmentService.resultData.asReadonly();

  //Whitout signals
  // get results(){
  //  return this.investmentService.resultData;
  // }
}
