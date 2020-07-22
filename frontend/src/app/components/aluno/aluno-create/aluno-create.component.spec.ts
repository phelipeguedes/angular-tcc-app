import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoCreateComponent } from './aluno-create.component';

describe('AlunoCreateComponent', () => {
  let component: AlunoCreateComponent;
  let fixture: ComponentFixture<AlunoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
