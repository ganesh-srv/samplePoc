import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmpComponent } from './smp.component';

describe('SmpComponent', () => {
  let component: SmpComponent;
  let fixture: ComponentFixture<SmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
