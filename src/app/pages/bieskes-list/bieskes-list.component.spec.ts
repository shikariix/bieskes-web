import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BieskesListComponent } from './bieskes-list.component';

describe('BieskesListComponent', () => {
  let component: BieskesListComponent;
  let fixture: ComponentFixture<BieskesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BieskesListComponent]
    });
    fixture = TestBed.createComponent(BieskesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
