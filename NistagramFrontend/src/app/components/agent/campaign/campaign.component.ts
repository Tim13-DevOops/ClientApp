import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Campaign } from 'src/app/model/campaign.model';
import { Post } from 'src/app/model/post.model';
import { Product } from 'src/app/model/product.model';
import { PostService } from 'src/app/services/post.service';
import { ProductService } from 'src/app/services/product.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ToastService } from 'src/app/services/toast.service';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  faCalendarAlt = faCalendarAlt


  campaign: Campaign = new Campaign();

  postType: string = 'post'

  startDate: NgbDateStruct = {
    day: 1,
    month: 1,
    year: 2021,
  }

  startTime: NgbTimeStruct = {
    hour: 1,
    minute: 0,
    second: 0
  }

  endDate: NgbDateStruct = {
    day: 1,
    month: 1,
    year: 2021,
  }

  endTime: NgbTimeStruct = {
    hour: 1,
    minute: 0,
    second: 0
  }


  products: Product[] = []
  selectedProduct: Product = new Product()

  constructor(private router: Router, private productService: ProductService, private toastService: ToastService, private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.productService.get().subscribe((data: Product[]) => {
      this.products = data;
    }, (err: any) => {
      this.toastService.show(err.message)
    })

  }

  imageUploaded(imageId: string) {
    this.campaign.post.image = imageId;
  }

  onSubmit() {
    if (this.postType == 'product') {
      this.campaign.post.image = this.selectedProduct.image;
      this.campaign.post.description = this.selectedProduct.name;
      this.campaign.post.product_id = this.selectedProduct.id;
    }
    this.campaign.start = this.campaign.dateStringFromStructs(this.startDate, this.startTime)
    this.campaign.end = this.campaign.dateStringFromStructs(this.endDate, this.endTime)

    this.campaignService.postCampaign(this.campaign).subscribe((data: any) => {
      this.router.navigateByUrl("/home")
    }, (err: any) => {
      this.toastService.show(err.message)
    })
  }

  changePostType(value: string) {
    this.postType = value;
  }

  selectProduct(event: any) {
    this.selectedProduct = event.target.value;
    console.log(event)
  }

}
