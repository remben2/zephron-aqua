import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav'; // A te fájlneveid alapján így fog kinézni!
import { Footer } from './footer/footer';

@Component({
  imports: [RouterOutlet, Nav, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('zephron-aqua');
}
