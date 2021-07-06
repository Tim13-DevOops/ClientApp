

export class Post {
    id: number;
    timestamp: string;
    image: string;
    description: string;
    profile_username: string;
    liked_by_user: boolean;
    disliked_by_user: boolean;
    likes: number;
    dislikes: number;

    constructor(obj?:any) {
        this.id = obj && obj.id || 0;
        this.timestamp = obj && obj.timestamp || "";
        this.image = obj && obj.image || "";
        this.description = obj && obj.description || "";
        this.profile_username = obj && obj.profile_username || 0;
        this.liked_by_user = obj && obj.liked_by_user || false;
        this.disliked_by_user = obj && obj.disliked_by_user || false;
        this.likes = obj && obj.likes || 0;
        this.dislikes = obj && obj.dislikes || 0;
    }

}