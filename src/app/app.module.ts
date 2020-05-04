import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { ButtonWarningComponent } from './components/button-warning/button-warning.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BootstrapSidebarComponent } from './components/bootstrap-sidebar/bootstrap-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonPrimaryComponent,
    ButtonWarningComponent,
    SideBarComponent,
    BootstrapSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
