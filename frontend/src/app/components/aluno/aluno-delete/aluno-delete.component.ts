import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.css']
})
export class AlunoDeleteComponent implements OnInit {

  aluno: Aluno;

  constructor(private alunoService: AlunoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getAlunoById(id);
  }

  removeAluno(): void {
    this.alunoService.delete(this.aluno.id).subscribe(() => {
      this.alunoService.displayMessage('Aluno excluído com sucesso!');
      this.redirectTo('/alunos');
    });
  }

  getAlunoById(id): void {
    this.alunoService.readById(id).subscribe(aluno => {
      this.aluno = aluno;
    });
  }

  cancel(): void {
    this.redirectTo('/alunos')
  }

  redirectTo(url): void {
    this.router.navigate([url]);
  }

}
