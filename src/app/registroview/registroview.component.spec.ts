import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroviewComponent } from './registroview.component';

describe('RegistroviewComponent', () => {
  let component: RegistroviewComponent;
  let fixture: ComponentFixture<RegistroviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
