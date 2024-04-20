import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCamComponent } from './open-cam.component';

describe('OpenCamComponent', () => {
  let component: OpenCamComponent;
  let fixture: ComponentFixture<OpenCamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenCamComponent]
    });
    fixture = TestBed.createComponent(OpenCamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
