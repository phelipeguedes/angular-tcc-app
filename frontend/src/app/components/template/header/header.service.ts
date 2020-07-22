import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderTitle } from './header-title.model'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerTitle = new BehaviorSubject<HeaderTitle>({
    title: 'Início',
    icon: 'home',
    routeURL: ''
  })

  constructor() { }

  get headerTitle(): HeaderTitle {
    return this._headerTitle.value;
  }

  set headerTitle(headerTitle: HeaderTitle) {
    this._headerTitle.next(headerTitle);
  }
}
