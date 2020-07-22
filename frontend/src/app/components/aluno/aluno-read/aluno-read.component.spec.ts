import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoReadComponent } from './aluno-read.component';

describe('AlunoReadComponent', () => {
  let component: AlunoReadComponent;
  let fixture: ComponentFixture<AlunoReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
