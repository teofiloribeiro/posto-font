import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultColumnComponent } from './mult-column.component';

describe('MultColumnComponent', () => {
  let component: MultColumnComponent;
  let fixture: ComponentFixture<MultColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
