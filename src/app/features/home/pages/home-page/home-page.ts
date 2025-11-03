import { Component } from '@angular/core';
import { ConfirmButton } from '../../../../shared/components/confirm-button/confirm-button';

@Component({
  selector: 'app-home-page',
  imports: [ConfirmButton],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  onConfirmation() {
    alert('IL A VALIDE LE BOUTOONNNNNNNNNN');
  }
}
