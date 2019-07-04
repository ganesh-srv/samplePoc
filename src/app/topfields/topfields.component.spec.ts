import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfieldsComponent } from './topfields.component';

describe('TopfieldsComponent', () => {
  let component: TopfieldsComponent;
  let fixture: ComponentFixture<TopfieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopfieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
