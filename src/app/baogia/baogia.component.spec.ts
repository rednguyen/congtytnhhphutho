import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaogiaComponent } from './baogia.component';

describe('BaogiaComponent', () => {
  let component: BaogiaComponent;
  let fixture: ComponentFixture<BaogiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaogiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaogiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
