import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreamTypesComponent } from './cream-types.component';

describe('CreamTypesComponent', () => {
  let component: CreamTypesComponent;
  let fixture: ComponentFixture<CreamTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreamTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreamTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
