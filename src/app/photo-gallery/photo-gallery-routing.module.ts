import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageGridComponent } from "./image-grid/image-grid.component";
import { ImageInfoComponent } from "./image-info/image-info.component";

const routes: Routes = [
  {
    path: 'image-grid',
    component: ImageGridComponent
  },
  {
    path: 'image-info/:id',
    component: ImageInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoGalleryRoutingModule { }
