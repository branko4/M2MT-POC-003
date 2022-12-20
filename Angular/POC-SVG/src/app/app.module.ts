import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MappingComponent } from './mapping/mapping.component';
import { ModelComponent } from './model/model.component';
import { ElementComponent } from './element/element.component';
import { AttributeComponent } from './attribute/attribute.component';
import { SvgComponent } from './model/svg/svg.component';

@NgModule({
  declarations: [
    AppComponent,
    MappingComponent,
    ModelComponent,
    ElementComponent,
    AttributeComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
