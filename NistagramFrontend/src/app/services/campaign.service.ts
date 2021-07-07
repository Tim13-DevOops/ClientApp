
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Advertisement } from '../model/advertisement.model';
import { Campaign } from '../model/campaign.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private http: HttpClient) { }

  postCampaign(campaign: Campaign): Observable<any> {
    return this.http.post(`${environment.campaign_url}/campaign`, campaign)
  }

  getAdvertisements(params: any): Observable<Advertisement[]> {
    let queryParams = {}

    if (params) {
      queryParams = {
        params: new HttpParams()
        .set("page", params.page || "")
        .set("page_size", params.pageSize || "")
      }
    }
    return this.http.get(`${environment.campaign_url}/advertisement`, queryParams).pipe(map((data: any) => {
      return data.map((x:any) => new Advertisement(x))
    }))
  }

}
