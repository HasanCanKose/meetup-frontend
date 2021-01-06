import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StyleService {
  registerPage$ = new ReplaySubject<any>(1);
}
