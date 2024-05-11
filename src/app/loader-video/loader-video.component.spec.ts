import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderVideoComponent } from './loader-video.component';

describe('LoaderVideoComponent', () => {
  let component: LoaderVideoComponent;
  let fixture: ComponentFixture<LoaderVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderVideoComponent]
    });
    fixture = TestBed.createComponent(LoaderVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
