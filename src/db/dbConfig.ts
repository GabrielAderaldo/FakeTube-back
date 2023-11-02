import { Client } from "pg";

class DbConfig{
    host?:string
    port?:number
    database?:string
    user?:string
    pass?:string

    constructor(host?:string,port?:number,database?:string,user?:string,pass?:string){
        this.host = host
        this.port = port
        this.database = database
        this.user = user
        this.pass = pass
    }

    dbInitUrl(urlPost:string):Client{
        return new Client(urlPost)
    }

    dbInit():Client{
        return new Client({
            host: this.host,
            port: this.port,
            database: this.database,
            user: this.user,
            password: this.pass,
        })
    }

}


export default DbConfig