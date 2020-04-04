import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutG2GComponent } from './about-g2-g.component';

describe('AboutG2GComponent', () => {
  let component: AboutG2GComponent;
  let fixture: ComponentFixture<AboutG2GComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutG2GComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutG2GComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
