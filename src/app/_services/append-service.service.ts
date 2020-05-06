import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ReflectiveInjector
} from '@angular/core'

import { BehaviorSubject } from 'rxjs';

import { MoskitieraFormularzComponent } from '../moskitiera-formularz/moskitiera-formularz.component';

@Injectable({
  providedIn: 'root'
})
export class AppendServiceService {
  sum = new BehaviorSubject<number>(0);
  currentSum = this.sum.asObservable();

  constructor() {
  }

  sumUp(result: number) {
    this.sum.next(this.sum.value + result);
  }

}
