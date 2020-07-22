import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component'
import { AlunoComponent } from './views/aluno/aluno.component';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { AlunoReadComponent } from './components/aluno/aluno-read/aluno-read.component'

import { HttpClient, HttpClientModule } from '@angular/common/http'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBar } from '@angular/material/snack-bar'
import { OverlayModule } from '@angular/cdk/overlay';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AlunoUpdateComponent } from './components/aluno/aluno-update/aluno-update.component';
import { AlunoDeleteComponent } from './components/aluno/aluno-delete/aluno-delete.component';
import { FooterComponent } from './components/template/footer/footer.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AlunoComponent,
    AlunoCreateComponent,
    AlunoReadComponent,
    AlunoUpdateComponent,
    AlunoDeleteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    OverlayModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
