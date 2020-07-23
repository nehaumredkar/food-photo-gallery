import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FlickrapiService {

   private flickrArgs = {
    params: {
      api_key : '9eefc032616708a3d65ebd648ab5c69a',
      sort: "relevance",
      content_type : '1',
      privacy_filter : '1',
      safe_search : '1',
      tags: 'foods',
      media: 'photos',
      format : 'json',
      nojsoncallback: '1',
      per_page : '30'
    }
  }

  private flickrUrl = "https://www.flickr.com/services/rest/";

  constructor(private http: HttpClient) { }

  getImages(pageNumber){
    this.flickrArgs.params['method'] = 'flickr.photos.search';
    this.flickrArgs.params['page'] = pageNumber.toString();
    return this.http.get<any>(this.flickrUrl, this.flickrArgs);
  }

  getImageInfo(id){
    this.flickrArgs.params['method'] = 'flickr.photos.getInfo';
    this.flickrArgs.params['photo_id'] = id;
    return this.http.get<any>(this.flickrUrl, this.flickrArgs)
  }

}
