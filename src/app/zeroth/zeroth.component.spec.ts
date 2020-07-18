import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZerothComponent } from './zeroth.component';

describe('ZerothComponent', () => {
  let component: ZerothComponent;
  let fixture: ComponentFixture<ZerothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZerothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZerothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
