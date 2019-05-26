import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ResolverSample implements Resolve<Observable<string>> {
    resolve() {
      console.log(`ResolverSample`);
      return of('hello').pipe(delay(500000));
    }
}
