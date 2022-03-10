import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSelerComponent } from './best-seler.component';

describe('BestSelerComponent', () => {
  let component: BestSelerComponent;
  let fixture: ComponentFixture<BestSelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
