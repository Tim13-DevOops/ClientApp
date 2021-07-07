import { NgbDateStruct, NgbTimeStruct } from "@ng-bootstrap/ng-bootstrap";


export class Campaign {
    campaign_type: string;
    min_age: number;
    max_age: number;
    gender: string;
    country: string;
    count: number;
    start: string;
    end: string;
    post: CampaignPost

    constructor(obj?:any) {
        this.campaign_type = obj && obj.campaign_type || "single";
        this.min_age = obj && obj.min_age || 0;
        this.max_age = obj && obj.max_age || 0;
        this.gender = obj && obj.gender || "";
        this.country = obj && obj.country || "";
        this.count = obj && obj.count || 0;
        this.start = obj && obj.start || "";
        this.end = obj && obj.end || "";
        this.post = obj && new CampaignPost(obj.post) || new CampaignPost();    
    }

    dateStringFromStructs(dateStruct: NgbDateStruct, timeStruct: NgbTimeStruct) {
        return new Date(
            dateStruct.year,
            dateStruct.month,
            dateStruct.day,
            timeStruct.hour,
            timeStruct.minute,
            timeStruct.second
        ).toISOString()
    }

}

export class CampaignPost {
    image: string;
    description: string;
    product_id: number;

    constructor(obj?:any) {
        this.image = obj && obj.image || "";
        this.description = obj && obj.description || "";
        this.product_id = obj && obj.product_id || "";
    }

}


