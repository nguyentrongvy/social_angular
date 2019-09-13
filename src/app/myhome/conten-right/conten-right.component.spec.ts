import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenRightComponent } from './conten-right.component';

describe('ContenRightComponent', () => {
  let component: ContenRightComponent;
  let fixture: ComponentFixture<ContenRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
