

export class PostComment {
    id: number;
    timestamp: string;
    text: string;
    profile_username: string;
    post_id: number;

    constructor(obj?:any) {
        this.id = obj && obj.id || 0;
        this.timestamp = obj && obj.timestamp || "";
        this.text = obj && obj.text || "";
        this.profile_username = obj && obj.profile_username || "";
        this.post_id = obj && obj.post_id || 0;
    }
}