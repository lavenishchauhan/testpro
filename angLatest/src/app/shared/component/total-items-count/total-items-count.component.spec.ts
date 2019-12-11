import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalItemsCountComponent } from './total-items-count.component';

describe('TotalItemsCountComponent', () => {
  let component: TotalItemsCountComponent;
  let fixture: ComponentFixture<TotalItemsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalItemsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalItemsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
