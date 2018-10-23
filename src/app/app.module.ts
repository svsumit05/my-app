import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { OccupationDetailsComponent } from './occupation-details/occupation-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { ConclusionComponent } from './conclusion/conclusion.component';

const appRoutes: Routes = [
  { path: 'personal-detail', component: PersonalDetailsComponent },
  { path: 'occupation-detail',component: OccupationDetailsComponent },
  { path: 'loan-detail',component: LoanDetailsComponent },
  { path: 'conclusion',component: ConclusionComponent },
  { path: '',
    redirectTo: '/personal-detail',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    OccupationDetailsComponent,
    LoanDetailsComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSnackBarModule,
    MatSliderModule,
    MatGridListModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
