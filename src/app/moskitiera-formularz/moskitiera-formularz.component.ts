import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@Angular/forms';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-moskitiera-formularz',
  templateUrl: './moskitiera-formularz.component.html',
  styleUrls: ['./moskitiera-formularz.component.css']
})
export class MoskitieraFormularzComponent implements OnInit {
  calculatorForm: FormGroup;
  actualPrice = 0.00;
  widthMin = 30;
  widthMax = 150;
  heightMin = 100;
  heightMax = 220;
  heightIterations: number[] = [100, 130, 140, 150, 200, 210, 220];
  price: number[][] =
    [[42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 73, 76, 79],
    [49, 52, 56, 59, 62, 66, 69, 73, 76, 79, 83, 86, 89],
    [51, 55, 58, 62, 65, 69, 72, 76, 79, 83, 86, 89, 93],
    [54, 57, 61, 64, 68, 72, 75, 79, 82, 86, 89, 93, 96],
    [66, 70, 74, 78, 82, 86, 90, 94, 98, 102, 106, 110, 114],
    [68, 72, 76, 80, 85, 89, 93, 97, 101, 105, 110, 114, 118],
    [73, 78, 84, 86, 92, 97, 103, 105, 111, 116, 119, 124, 130]];
  cornerConnector = false;

  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
    this.calculatorForm = new FormGroup({
      width: new FormControl('', [Validators.required, Validators.min(this.widthMin), Validators.max(this.widthMax)]),
      height: new FormControl('', [Validators.required, Validators.min(this.heightMin), Validators.max(this.heightMax)]),
      profile: new FormControl('', Validators.min(0)),
      cornerConnector: new FormControl()
    });
  }

  calculate() {
    if (this.calculatorForm.valid) {
      var widthIteration = this.widthMin;
      let widthPosition;
      let heightPosition = 0;
      let price = 0;
      console.log("szerokość: " + this.calculatorForm.controls['width'].value);
      for (let i in this.price[0]) {
        if (widthIteration >= this.calculatorForm.controls['width'].value) {
          widthPosition = i;
          break;
        }
        widthIteration += 10;
      }
      for (let i of this.heightIterations) {
        if (i >= this.calculatorForm.controls['height'].value) {
          break;
        }
        heightPosition++;
      }
      price = this.price[heightPosition][widthPosition];
      if (this.cornerConnector) {
        price = price * 1.15;
      }
      if (this.calculatorForm.controls['profile'].value != '') {
        price = price + (this.calculatorForm.controls['profile'].value * 11);
      }
      this.actualPrice = price;
    } else {
      this.alertify.error("Wprowadzone wartości są nieprawidłowe lub nie zostały wprowadzone");
    }
  }


}
