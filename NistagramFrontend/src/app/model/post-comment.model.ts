

export class PostComment {
    id: number;
    timestamp: string;
    text: string;
    user_profile_id: number;
    user_profile_username: string;
    post_id: number;

    constructor(obj?:any) {
        this.id = obj && obj.id || 0;
        this.timestamp = obj && obj.timestamp || "";
        this.text = obj && obj.text || "";
        this.user_profile_id = obj && obj.user_profile_id || 0;
        this.user_profile_username = obj && obj.user_profile_username || "";
        this.post_id = obj && obj.post_id || 0;
    }
}