import { FormControl } from "@angular/forms";

export interface ArticleForm {
    title: FormControl<string>;
    body: FormControl<string>;
}