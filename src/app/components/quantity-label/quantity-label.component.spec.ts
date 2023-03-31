import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QunatityLabelComponent } from './quantity-label.component';

describe('QunatityLabelComponent', () => {
  let component: QunatityLabelComponent;
  let fixture: ComponentFixture<QunatityLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QunatityLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QunatityLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
