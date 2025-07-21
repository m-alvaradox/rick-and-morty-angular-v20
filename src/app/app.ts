import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './components/character-list/character-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CharacterListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {}
