import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ArticleForm } from './article-form.model';

@Component({
  selector: 'app-add-article-dialog',
  templateUrl: './add-article-dialog.component.html',
  styleUrls: ['./add-article-dialog.component.scss']
})
export class AddArticleDialogComponent implements OnInit {

  public articleForm: FormGroup<ArticleForm> = this.fb.nonNullable.group({
    title: ['', Validators.required],
    body: ['', Validators.required]
  });

  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  add(): void {
    this.ref.close(this.articleForm.value);
  }
}
