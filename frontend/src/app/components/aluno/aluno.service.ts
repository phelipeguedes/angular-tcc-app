import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http'
import { Aluno } from "./aluno.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  apiURL = 'http://localhost:5000/alunos';

  // exibe uma mensagem para notificar o status da ação
  displayMessage(msg: string) {

    this.snackbar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  // cria o aluno
  create(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.apiURL, aluno)
  }

  // todos os alunos
  read():Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiURL)
  }

  // aluno pelo id
  readById(id: string): Observable<Aluno> {
    const url = `${this.apiURL}/${id}`
    return this.http.get<Aluno>(url)
  }

  // altera o aluno
  update(aluno: Aluno): Observable<Aluno> {
    const url = `${this.apiURL}/${aluno.id}`
    return this.http.put<Aluno>(url, aluno)
  }

  // exclui o aluno
  delete(id: number):Observable<Aluno> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<Aluno>(url);
  }
}
