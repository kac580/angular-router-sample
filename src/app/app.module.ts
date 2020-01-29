import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';

import { CrisisListComponent }   from './crisis-list/crisis-list.component';
// import { HeroListComponent }     from './heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    // HeroListComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    // HeroDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
