import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitatsIsmaNaciriComponent } from './habilitats-isma-naciri.component';

describe('HabilitatsIsmaNaciriComponent', () => {
  let component: HabilitatsIsmaNaciriComponent;
  let fixture: ComponentFixture<HabilitatsIsmaNaciriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitatsIsmaNaciriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitatsIsmaNaciriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
