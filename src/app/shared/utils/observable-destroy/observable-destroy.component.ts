import { ReplaySubject } from 'rxjs';
import { OnDestroy, Component } from '@angular/core';

@Component({
  template: '',
})

export class ObservableDestroyComponent implements OnDestroy {
  protected destroyed$: ReplaySubject<void> = new ReplaySubject(1);

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}