import { Component, OnInit } from '@angular/core';

import { FlickrapiService } from "../flickrapi.service";
import { NgxPaginationModule } from "ngx-pagination";

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.css']
})
export class ImageGridComponent implements OnInit {

  imageList : any = [];
  imageDetail;
  photoRating: any = [];
  totalRecords: Number;
  pageNumber : number = 0;
  
  constructor(private flickrApi: FlickrapiService){}

  ngOnInit(){
    this.photoRating = JSON.parse(localStorage.getItem('photoArr'));
        
    this.flickrApi.getImages(this.pageNumber).subscribe(res => {
      this.imageList = res.photos.photo;
      this.totalRecords = res.photos.total;   
      this.pageNumber = 1;  
    })
  }

  pagination() {  
    this.flickrApi.getImages(this.pageNumber).subscribe(res => {
      this.imageList = res.photos.photo;
    })
  }


}
