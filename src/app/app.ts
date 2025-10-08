import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Speakers } from './components/speakers/speakers';
import { Highlights } from './components/highlights/highlights';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterModule,Footer,Speakers,Highlights,Hero,About,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('climax-homepage');
}
