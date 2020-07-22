import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 

    headerService.headerTitle = {
      title: 'Alunos',
      icon: 'people',
      routeURL: '/alunos'
    }
  }

  ngOnInit(): void {
  }

  goToAlunos(): void {
    this.router.navigate(['/alunos-create'])
  }

}
