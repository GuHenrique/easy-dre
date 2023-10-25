import { Component } from '@angular/core';
import { Cost } from '../interface/Cost';
import { CostService } from '../service/cost.service';

@Component({
  selector: 'app-cost-table',
  templateUrl: './cost-table.component.html',
  styleUrls: ['./cost-table.component.css']
})
export class CostTableComponent {
  costs: Cost[] = [];
  totalValue: string = "";


  constructor(private costService: CostService) {
    this.getCosts();
  }
  getCosts(): void {
    this.costService.getAll().subscribe(costs => {
      this.costs = costs;
      this.calculateTotalValue(); // Após obter os custos, calcule o valor total
    });
  }

  calculateTotalValue(): void {
    // Inicialize o total como zero
    let total = 0;

    // Itere pelos custos e some os valores diretamente
    for (const cost of this.costs) {
      if (typeof cost.costValue === 'number') {
        total += cost.costValue;
      }
    }

    // Formate o total como uma string (por exemplo, com formatação de moeda)
    this.totalValue = 'R$ ' + total.toFixed(2); // Formate com 2 casas decimais
  }



}
