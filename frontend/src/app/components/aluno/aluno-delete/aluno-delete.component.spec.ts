import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoDeleteComponent } from './aluno-delete.component';

describe('AlunoDeleteComponent', () => {
  let component: AlunoDeleteComponent;
  let fixture: ComponentFixture<AlunoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
