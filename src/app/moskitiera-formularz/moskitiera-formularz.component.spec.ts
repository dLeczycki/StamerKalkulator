/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoskitieraFormularzComponent } from './moskitiera-formularz.component';

describe('MoskitieraFormularzComponent', () => {
  let component: MoskitieraFormularzComponent;
  let fixture: ComponentFixture<MoskitieraFormularzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoskitieraFormularzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoskitieraFormularzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
