import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkmodeTogglerComponent } from './darkmode-toggler.component';

describe('DarkmodeTogglerComponent', () => {
  let component: DarkmodeTogglerComponent;
  let fixture: ComponentFixture<DarkmodeTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkmodeTogglerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkmodeTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
