import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplaodVideoComponent } from './uplaod-video.component';

describe('UplaodVideoComponent', () => {
  let component: UplaodVideoComponent;
  let fixture: ComponentFixture<UplaodVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UplaodVideoComponent]
    });
    fixture = TestBed.createComponent(UplaodVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
