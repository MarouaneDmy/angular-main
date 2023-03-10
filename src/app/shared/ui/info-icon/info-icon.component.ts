import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-icon',
  templateUrl: './info-icon.component.html',
  styleUrls: ['./info-icon.component.scss']
})
export class InfoIconComponent {
  @Input() message: string = ''   ;
  @Input() position: string = 'top';
  @Input() icon = 'info-circle';

  constructor() {}
}
