import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhelloComponent } from './myhello.component';

describe('MyhelloComponent', () => {
  let component: MyhelloComponent;
  let fixture: ComponentFixture<MyhelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyhelloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyhelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
