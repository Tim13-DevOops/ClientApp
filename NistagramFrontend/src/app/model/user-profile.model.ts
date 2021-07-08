

export class UserProfile {
    id: number;
    name: string;
    username: string;
    email: string;
    phone_number: string;
    birth_date: string;
    biography: string;
    website: string;
    timestamp: string;
    public: boolean;
    taggable: boolean;

    constructor(obj?:any) {
        this.id = obj && obj.id || 0;
        this.name = obj && obj.name || "";
        this.username = obj && obj.username || "";
        this.email = obj && obj.email || "";
        this.phone_number = obj && obj.phone_number || "";
        this.birth_date = obj && obj.birth_date || "";
        this.biography = obj && obj.biography || "";
        this.website = obj && obj.website || "";
        this.timestamp = obj && obj.timestamp || "";
        this.public = obj && obj.public || true;
        this.taggable = obj && obj.taggable || true;
    }
}