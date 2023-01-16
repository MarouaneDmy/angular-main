import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserForm } from '../user-form.model';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {

  public userForm: FormGroup<UserForm> = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', Validators.required],
    });

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  add(): void {
    this.ref.close(this.userForm.value);
  }
}
