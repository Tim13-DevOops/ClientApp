import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  
  get(): Observable<Product[]> {
    return this.http.get(`${environment.agent_api_url}/product`).pipe(map((result: any) => {
      return result.map((item: any) => new Product(item))
    }))
  }
}
