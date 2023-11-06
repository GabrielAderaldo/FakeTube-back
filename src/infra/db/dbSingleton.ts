import { Client } from "pg";

class DbSingleton{

    private static instance:Client | null = null

    static setClient(instance:Client){
        if(this.instance != null && this.instance != undefined){
            return this.instance;
        }

        this.instance = instance
        return this.instance
    }

    static getClient(){
        return this.instance
    }
}

export default DbSingleton