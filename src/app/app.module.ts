import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardComponent } from './card-app/card/card.component';
import { CardAppComponent } from './card-app/card-app.component';
import { HomeComponent } from './home/home.component';
import { TypingComponent } from './typing/typing.component';
import { PwComponent } from './pw/pw.component';
import { PipesComponent } from './pipes/pipes.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cards', component: CardAppComponent },
  { path: 'typing', component: TypingComponent },
  { path: 'password', component: PwComponent },
  { path: 'pipes', component: PipesComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardAppComponent,
    HomeComponent,
    TypingComponent,
    PwComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
