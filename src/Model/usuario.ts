class User {
    
    name: string;
    pass: string;
    avatar: string;
    email: string;
    n_subscribe: number;
    n_videos: number;

    constructor(params: {
        name: string;
        pass:string;
        avatar: string;
        email: string;
        n_subscribe: number;
        n_videos: number;
    }) {
        this.name = params.name;
        this.avatar = params.avatar;
        this.email = params.email;
        this.n_subscribe = params.n_subscribe;
        this.n_videos = params.n_videos;
        this.pass = params.pass
    }
}

export default User;