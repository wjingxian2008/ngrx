import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private store: Store<{ count: number }>) { }

  ngOnInit() {
  }

  onSubmit(username: string, password: string) {
    this.store.dispatch(login({ username: username, password: password }));
  }
}
