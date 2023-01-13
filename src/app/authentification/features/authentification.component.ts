import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User, UsersService } from '../../users/data-access/users.service';
import { AuthentificationService } from  '../data-access/authentification.service';
import { UsersStore } from 'src/app/users/data-access/users.store';
import { map, filter, mergeMap, } from 'rxjs/operators'

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss'],
  providers: [UsersStore]
})
export class AuthentificationComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  usersList: User[] = []
  userExist = false;


  public users$ = this.usersStore.users$;
  constructor(
    private authService: AuthentificationService,
    private router: Router, 
    private formBuilder: FormBuilder, 
    private usersStore: UsersStore,
    private readonly usersService: UsersService
    ) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
    /* this.usersService.getUsers().subscribe((data : User[]) => {
      this.usersList.push(data)
    }) */
    // this.users$.pipe(map(user => user.firstName === this.loginForm.value.email))
    /* this.usersService.getUsers().pipe(filter(user => user.email == this.loginForm.value.email))) */
  }
  
  get formControls() { return this.loginForm.controls; }
  
  login(){
    /* this.usersList.some(user => user.email === this.loginForm.value.email) */
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/');
  }
  
}
