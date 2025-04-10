import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ScrollDirective } from './scroll.directive';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    // AppComponent is standalone and should not be declared here
    // ScrollDirective is standalone and should be imported instead
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes), // Utilisez les routes définies
    ScrollDirective, // Importez ScrollDirective car il est standalone
    AppComponent, // Importez AppComponent car il est standalone
    ProjectComponent, // Déclarez ProjectComponent
    HeaderComponent // Déclarez HeaderComponent
  ],
  providers: [],
  // Removed bootstrap array as AppComponent is standalone
})
export class AppModule {}
