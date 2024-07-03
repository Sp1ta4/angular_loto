import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { StartMenuComponent } from './components/start-menu/start-menu.component';
import { MainGameComponent } from './components/main-game/main-game.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketBoxComponent } from './components/ticket-box/ticket-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartMenuComponent,
    MainGameComponent,
    TicketComponent,
    TicketBoxComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSliderModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
