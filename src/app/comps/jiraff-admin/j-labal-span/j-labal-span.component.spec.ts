import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JLabalSpanComponent } from './j-labal-span.component';

describe('JLabalSpanComponent', () => {
  let component: JLabalSpanComponent;
  let fixture: ComponentFixture<JLabalSpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JLabalSpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JLabalSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
