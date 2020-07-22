import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoUpdateComponent } from './aluno-update.component';

describe('AlunoUpdateComponent', () => {
  let component: AlunoUpdateComponent;
  let fixture: ComponentFixture<AlunoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
