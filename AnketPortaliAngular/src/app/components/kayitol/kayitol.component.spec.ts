/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KayitolComponent } from './kayitol.component';

describe('KayitolComponent', () => {
  let component: KayitolComponent;
  let fixture: ComponentFixture<KayitolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayitolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayitolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
