import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Cleave from 'cleave.js';

import { Cost } from '../interface/Cost';
import { CostService } from '../service/cost.service';


@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent implements OnInit {

  costForm!: FormGroup;
  cost!: Cost;


  constructor(private formBuilder: FormBuilder, private costService: CostService) {

  }

  ngOnInit(): void {

    this.costForm = this.formBuilder.group({
      costName: ["", Validators.required],
      costValue: ["", Validators.required]
    });


    new Cleave('#costValue', {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
      prefix: 'R$ ',
      numeralDecimalScale: 2,
      numeralDecimalMark: ',',
      delimiter: '.',
      numeralPositiveOnly: true,
    });

  }

  onSubmit() {
    if (this.costForm.valid) {
      this.cost = this.costForm.value;
      this.createCost(this.cost);
      this.costForm.reset();
      alert("Custo cadastrado com sucesso!")
    }
    else {
      alert("Preencha os campos obrigatórios!")
    }
  }
  removeFormatting(value: string) {
    const cleanedValue = value.replace(/[^0-9,]/g, '');
    const normalizedValue = cleanedValue.replace(',', '.');
    return (normalizedValue);
  }

  createCost(cost: Cost) {
    let newCost: Cost;

    newCost = {
      costName: cost.costName,
      costValue: this.removeFormatting(cost.costValue),
      email: String(localStorage.getItem("email"))
    };
    console.log(newCost)

    this.costService.create(newCost).subscribe()
  }
}
