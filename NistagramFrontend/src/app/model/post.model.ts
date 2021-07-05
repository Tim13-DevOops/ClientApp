

export class Post {
    id: number;
    timestamp: string;
    image: string;
    description: string;
    profile_id: number;
    profile_username: string;

    constructor(obj?:any) {
        this.id = obj && obj.id || 0;
        this.timestamp = obj && obj.timestamp || "";
        this.image = obj && obj.image || "";
        this.description = obj && obj.description || "";
        this.profile_id = obj && obj.profile_id || 0;
        this.profile_username = obj && obj.profile_username || 0;
    }

}