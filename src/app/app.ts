import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('bliblio');

  message: string = 'Hello world';

  constructor() {
    console.log(this.message);

    let helloWorld: string | null = null;
    helloWorld = 'Bonjour monde!';
    // @ts-ignore
    helloWorld = 42;
  }
}
