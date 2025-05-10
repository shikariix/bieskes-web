import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BieskeComponent } from './bieske.component';

describe('BieskeComponent', () => {
  let component: BieskeComponent;
  let fixture: ComponentFixture<BieskeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BieskeComponent]
    });
    fixture = TestBed.createComponent(BieskeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
