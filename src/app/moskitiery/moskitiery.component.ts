import { Component, Inject, ViewContainerRef, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AppendServiceService } from '../_services/append-service.service';
import { MoskitieraFormularzComponent } from '../moskitiera-formularz/moskitiera-formularz.component';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-moskitiery',
  templateUrl: './moskitiery.component.html',
  styleUrls: ['./moskitiery.component.css']
})
export class MoskitieryComponent implements OnInit {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer;
  components = [];
  sum: number;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef, private appendService: AppendServiceService, private alertify: AlertifyService) {
  }


  ngOnInit() {
    this.appendService.currentSum.subscribe(sum => this.sum = sum);
  }

  addRow() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(MoskitieraFormularzComponent);
    const componentRef = this.dynamicComponentContainer.createComponent(factory);
    componentRef.changeDetectorRef.detectChanges();
    this.components.push(componentRef);
  }

  removeRow() {
    const componentIndex = this.components.length - 1;

    if (componentIndex !== -1) {
      this.dynamicComponentContainer.remove(componentIndex);
      this.components.splice(componentIndex, 1);
    } else {
      this.alertify.error("Nie możesz usunąć więcej wierszy");
    }
  }

}
