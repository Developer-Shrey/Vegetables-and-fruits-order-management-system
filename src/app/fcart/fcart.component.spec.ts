import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcartComponent } from './fcart.component';

describe('FcartComponent', () => {
  let component: FcartComponent;
  let fixture: ComponentFixture<FcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
