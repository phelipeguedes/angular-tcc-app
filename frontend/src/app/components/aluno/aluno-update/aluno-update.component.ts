import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-update',
  templateUrl: './aluno-update.component.html',
  styleUrls: ['./aluno-update.component.css']
})
export class AlunoUpdateComponent implements OnInit {

  aluno: Aluno;

  constructor(private alunoService: AlunoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // pega o id pela rota (url)
    const id = this.route.snapshot.paramMap.get('id');
    this.getAlunoById(id);
  }

  updateAluno(): void {
    this.alunoService.update(this.aluno).subscribe(() => {
      this.alunoService.displayMessage('Aluno alterado com sucesso!');
      this.redirecTO('/alunos');
    });
  }

  getAlunoById(id): void {    
    this.alunoService.readById(id).subscribe(aluno => {
      this.aluno = aluno;
    });
  }

  cancel(): void {
    this.redirecTO('/alunos');
  }

  // redireciona p/ a página desejada
  redirecTO(url): void {
    this.router.navigate([url]);
  }

}
