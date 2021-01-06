import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StyleService {
  registerPage$ = new ReplaySubject<any>(1);
  collapsed$ = new ReplaySubject<any>(1);
  eventPage$ = new ReplaySubject<any>(1);
}
