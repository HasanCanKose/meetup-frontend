import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  close$ = new Subject<void>();
  data$ = new ReplaySubject<any>(1);
}
