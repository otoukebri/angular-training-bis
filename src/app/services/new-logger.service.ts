import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable()
export class NewLoggerService extends Logger {
    log() {
        console.log('NewLoggerService');
    }
}
