import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@modules/auth/auth.module';
import { PageNotFoundComponent } from '@modules/page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
