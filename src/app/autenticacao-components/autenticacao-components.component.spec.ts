import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacaoComponentsComponent } from './autenticacao-components.component';

describe('AutenticacaoComponentsComponent', () => {
  let component: AutenticacaoComponentsComponent;
  let fixture: ComponentFixture<AutenticacaoComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutenticacaoComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutenticacaoComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
