export class Customer {
    id: number;
    comments: Comments[];
    created: string;
    modified: string;
    uuid: string;
    email: string;
    short_name: string;
    full_name: string;
    date_joined: string;
    status: string;
    gender: string;
    short_me: string;
    location: string;
    profile_picture: string;
}

export class Comments{
    id: number;
    created: string;
    modified: string;
    subject: string;
    body: string;
    status: string;
    rating: number;
    user: string;
    consultant: number

}