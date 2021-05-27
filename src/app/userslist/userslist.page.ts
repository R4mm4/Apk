import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {
  characters=[]
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://schoolido.lu/api/cards/')
    .subscribe(res=>{
      console.log(res);
      this.characters=res.results;
    }
      )
  }

}
