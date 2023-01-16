import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User, UsersService } from '../../users/data-access/users.service';
import { AuthentificationService } from  '../data-access/authentification.service';
import { UsersStore } from 'src/app/users/data-access/users.store';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss'],
  providers: [UsersStore]
})

export class AuthentificationComponent implements OnInit {
  /* Declaring the variables that will be used in the component. */
  loginForm: FormGroup;
  isSubmitted  =  false;
  usersList: User[] = [];
  singleUser: User[] = []
  userExist = false;
  public users$ = this.usersStore.users$;
  
  /**
   * This function is a constructor that takes in a bunch of services and stores and then does nothing
   * with them.
   * @param {AuthentificationService} authService - AuthentificationService,
   * @param {Router} router - Router - Angular's router service
   * @param {FormBuilder} formBuilder - FormBuilder
   * @param {UsersStore} usersStore - UsersStore
   * @param {UsersService} usersService - UsersService
   */
  constructor(
    private authService: AuthentificationService,
    private router: Router, 
    private formBuilder: FormBuilder, 
    private usersStore: UsersStore,
    private readonly usersService: UsersService
  ) {}

 

  ngOnInit() {
    /* Creating a form with two fields, email and password. */
    this.loginForm  =  this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
    /* Getting the users from the database and storing them in the usersList variable. */
    this.usersService.getUsers().subscribe((data) => {
      this.usersList = data
    })
  }
  
  /**
   * It returns the form controls of the login form
   * @returns The form controls.
   */
  get formControls() { return this.loginForm.controls; }
  
  /**
   * It checks if the email and password are correct and if they are, it logs the user in and redirects
   * them to the home page.
   * @returns The user object.
   */
  login(){
    this.singleUser = this.usersList.filter(user => user.email === this.loginForm.value.email)
    this.isSubmitted = true;
    if(this.loginForm.invalid || this.singleUser[0].password !== this.loginForm.value.password){
      return;
    }
    this.authService.login(this.singleUser[0]);
    this.router.navigateByUrl('/');
  }
  
}
