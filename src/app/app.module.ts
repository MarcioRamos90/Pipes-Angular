import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { LOCALE_ID } from "@angular/core";

import { AppComponent } from "./app.component";

import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";
import { DomseguroPipe } from "./pipes/domseguro.pipe";
import { SenhaPipe } from './pipes/senha.pipe';

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomseguroPipe, SenhaPipe],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "en" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
