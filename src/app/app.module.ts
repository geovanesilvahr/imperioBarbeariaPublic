import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthGuard } from './guards/auth-guard.guard';
import { AuthUsuarioService } from './services/usuario/auth.usuario.service';

import { ErrorStateMatcher, MAT_DATE_LOCALE, MatNativeDateModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DatabaseModule, provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LpHomeComponent } from './components/lp-home/lp-home.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LpHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    BrowserModule,
    MatExpansionModule,
    CommonModule,
    MatNativeDateModule,
    DatabaseModule,
    MatIconModule,
    AngularFireModule,
    provideFirebaseApp(() => initializeApp(environment)),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    BrowserModule,
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    AuthGuard,
    AuthUsuarioService,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    
    DatePipe
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
