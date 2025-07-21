import { inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, ApiResponse } from '../models/character';
import { Observable, tap } from 'rxjs';

export class Api {
  private readonly API_URL: string = 'https://rickandmortyapi.com/api/character';
  private readonly http = inject(HttpClient);

  private charactersSignal = signal<Character[]>([]);
  public readonly characters = this.charactersSignal.asReadonly();

  getCharacters(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.API_URL).pipe(
      tap(response => this.charactersSignal.set(response.results))
    );
  }

  searchCharacters(name: string): Observable<ApiResponse> {
    if (!name.trim()) return this.getCharacters();
    const searchUrl = `${this.API_URL}?name=${encodeURIComponent(name)}`;
    return this.http.get<ApiResponse>(searchUrl).pipe(
      tap(response => this.charactersSignal.set(response.results))
    );
  }
}

