import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) { 

    headerService.headerTitle = {
      title: 'Início',
      icon: 'home',
      routeURL: ''
    }
  }

  ngOnInit(): void {
  }

}
