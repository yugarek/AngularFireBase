import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroaddComponent } from './registroadd.component';

describe('RegistroaddComponent', () => {
  let component: RegistroaddComponent;
  let fixture: ComponentFixture<RegistroaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
