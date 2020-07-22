import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.headerTitle.title
  }

  get icon(): string {
    return this.headerService.headerTitle.icon
  }
  get route(): string {
    return this.headerService.headerTitle.routeURL
  }

}
