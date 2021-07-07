

export class Advertisement {
    id: number;
    deleted: boolean;
    date_of_publishing: string;
    post_id: number;
    campaign_id: number;
    timestamp: string;
    product_id: number;

    constructor(obj?:any) {
        this.id = obj && obj.id || 0;
        this.deleted = obj && obj.deleted || false;
        this.date_of_publishing = obj && obj.date_of_publishing || "";
        this.post_id = obj && obj.post_id || 0;
        this.campaign_id = obj && obj.campaign_id || 0;
        this.timestamp = obj && obj.timestamp || "";
        this.product_id = obj && obj.product_id || 0;
    }
}