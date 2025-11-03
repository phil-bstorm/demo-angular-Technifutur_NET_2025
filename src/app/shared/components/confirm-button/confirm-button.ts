import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-confirm-button',
  imports: [],
  templateUrl: './confirm-button.html',
  styleUrl: './confirm-button.scss',
})
export class ConfirmButton {
  // INPUT (informations données par le parent)
  confirmText = input<string>();
  label = input.required<string>();

  // OUTPUT (événement transmit de l'enfant vers le parent)
  confirmation = output<void>();

  onClick() {
    const confirmed = confirm(this.confirmText() ?? 'Es-tu sûr?');
    if (confirmed) {
      console.log('Rappeler le parent.');
      this.confirmation.emit();
    }
  }
}
