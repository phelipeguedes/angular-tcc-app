import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { AlunoService } from '../aluno.service'

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno: Aluno = {
    nome: '',
    email: '',
    matricula: null,
    curso: ''
  }

  constructor(private alunoService: AlunoService, private router: Router) { }

  ngOnInit(): void {

  }

  addAluno(): void {
    this.alunoService.create(this.aluno).subscribe(() => {
      this.alunoService.displayMessage('Aluno cadastrado com sucesso!')
      this.router.navigate(['alunos']);
    })
  }

  cancel() {
    this.router.navigate(['alunos']);
  }

}
