import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveNgifComponent } from './directive-ngif/directive-ngif.component';
import { DirectiveNgSwitchComponent } from './directive-ng-switch/directive-ng-switch.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectiveNgforComponent } from './directive-ngfor/directive-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveNgifComponent,
    DirectiveNgSwitchComponent,
    DirectiveNgforComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
