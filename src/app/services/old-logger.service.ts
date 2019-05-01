import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable()
export class OldLoggerService extends Logger {
    log() {
        console.log('OldLoggerService');
    }
}
