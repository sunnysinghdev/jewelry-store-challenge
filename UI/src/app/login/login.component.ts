import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";
  constructor(public httpClient: HttpClient, public appService: AppService,private router: Router,) { }

  ngOnInit() {
  }
  onLogin($event) {
    this.httpClient.post(environment.apiUrl + "login", { name: this.userName }).subscribe((res: any) => {
      console.log(res);
      this.appService.customer = res;
     this.router.navigate(['estimate']);

    }, (err: any) => {
      console.error(err);

    })
  }
  onCancel($event) {
    this.userName = "";
    this.password = "";
  }
}
