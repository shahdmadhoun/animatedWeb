import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';

const routes: Routes = [
  { path: '', component: CoverPhotoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
