import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoGalleryRoutingModule } from './photo-gallery-routing.module';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { ImageInfoComponent } from './image-info/image-info.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ImageGridComponent, ImageInfoComponent],
  imports: [
    CommonModule,
    PhotoGalleryRoutingModule,
    ReactiveFormsModule
  ]
})
export class PhotoGalleryModule { }
