import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenLeftComponent } from './conten-left.component';

describe('ContenLeftComponent', () => {
  let component: ContenLeftComponent;
  let fixture: ComponentFixture<ContenLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
