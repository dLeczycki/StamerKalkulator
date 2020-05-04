/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoskitieryComponent } from './moskitiery.component';

describe('MoskitieryComponent', () => {
  let component: MoskitieryComponent;
  let fixture: ComponentFixture<MoskitieryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoskitieryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoskitieryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
