import { Component, OnInit } from '@angular/core';
import { FlickrapiService } from "../flickrapi.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-image-info',
  templateUrl: './image-info.component.html',
  styleUrls: ['./image-info.component.css']
})
export class ImageInfoComponent implements OnInit {

  constructor(private flickrApi: FlickrapiService, private router: Router, private route: ActivatedRoute){}

  id = this.route.snapshot.paramMap.get("id");
  imageInfo ;
  imageUrl;
  photorating : any = [];
  currentRate = 0;

  feedbackForm = new FormGroup({
    photo_id: new FormControl(this.id, [Validators.required]),
    provider: new FormControl("", [Validators.required, Validators.minLength(2),Validators.maxLength(30)]),
    reason: new FormControl("", [Validators.required, Validators.minLength(2),Validators.maxLength(100)])
  });
  
  ngOnInit() {
    this.flickrApi.getImageInfo(this.id).subscribe(res => {
      this.imageInfo = res.photo;
      this.imageUrl = "http://farm"+res.photo.farm+".static.flickr.com/"+res.photo.server+"/"+res.photo.id+"_"+res.photo.secret+".jpg"
    })
  }

  submitFeedback(){
    if(this.feedbackForm.valid){
      this.feedbackForm.value.rating = this.currentRate;
      if(JSON.parse(localStorage.getItem('photoArr')) != null){
        this.photorating = JSON.parse(localStorage.getItem('photoArr'));
      }           
      this.photorating.forEach(element => {
        if(element.photo_id == this.feedbackForm.value.photo_id){          
          this.photorating.splice(this.photorating.indexOf(element), 1);           
        }        
      });
      this.photorating.push(this.feedbackForm.value);
      localStorage.setItem('photoArr', JSON.stringify(this.photorating));
      this.router.navigate(['photo-gallery/image-grid']);
    }
  }

  getRating(rate){
    this.currentRate = rate;
  }

}
