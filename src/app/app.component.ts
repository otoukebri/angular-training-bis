import { Component, InjectionToken, OnInit } from '@angular/core';
import { Logger } from './services/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-training-bis';

  constructor(private logger: Logger) {}
  ngOnInit() {
    this.logger.log();
  }
}
