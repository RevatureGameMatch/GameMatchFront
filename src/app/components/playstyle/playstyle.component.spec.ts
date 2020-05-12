import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystyleComponent } from './playstyle.component';

describe('PlaystyleComponent', () => {
  let component: PlaystyleComponent;
  let fixture: ComponentFixture<PlaystyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaystyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaystyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
