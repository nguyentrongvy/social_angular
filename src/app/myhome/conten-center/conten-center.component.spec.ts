import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenCenterComponent } from './conten-center.component';

describe('ContenCenterComponent', () => {
  let component: ContenCenterComponent;
  let fixture: ComponentFixture<ContenCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
