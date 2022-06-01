import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor(private user : UserService) { }
  userData: any=[];
  ngOnInit(): void {
    this.user.getAllUser().subscribe( ( allData ) => {
      console.log( allData );
      this.userData=allData;
    } );
  }
  deleteUser( user_id: any ) {
    this.user.deleteUser( user_id ).subscribe( ( result )=>{
      //console.log( result );
      this.ngOnInit();
    }); 
  }
} 
