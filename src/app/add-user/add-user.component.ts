import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private user: UserService) { }
  addUser=new FormGroup( {
    id: new FormControl( ''),
    name: new FormControl( '' ),
    email: new FormControl( '' ),
  } );

message: boolean=false;
ngOnInit(): void {
  }
SaveData() {
  //console.log( this.addUser.value );
  this.user.saveUserData(this.addUser.value).subscribe( (result) => {
  // console.log(result);
  this.message=true;
  this.addUser.reset( {} );
  } );
}
removeMessage() {
  this.message=false;
  }
}