import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/photo-gallery/image-grid",
    pathMatch: "full"
  },
  {
    path : "photo-gallery",
    loadChildren: () => import("./photo-gallery/photo-gallery.module").then(m => m.PhotoGalleryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
