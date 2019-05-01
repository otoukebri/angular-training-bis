import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent, ANGULAR_BOOK } from './components/book/book.component';
import { Logger } from './services/logger';
import { NewLoggerService } from './services/new-logger.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers : [{provide: Logger, useClass: NewLoggerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
