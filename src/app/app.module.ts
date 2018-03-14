import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
   // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
   environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
