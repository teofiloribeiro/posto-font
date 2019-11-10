import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultLine2dComponent } from './mult-line2d.component';

describe('MultLine2dComponent', () => {
  let component: MultLine2dComponent;
  let fixture: ComponentFixture<MultLine2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultLine2dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultLine2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
