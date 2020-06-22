import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanettesComponent } from './planettes.component';

describe('PlanettesComponent', () => {
  let component: PlanettesComponent;
  let fixture: ComponentFixture<PlanettesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanettesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
