import { Client } from "pg";
import DbConfig from "./dbConfig";
import TYPE_OF_CONNECTION from "./dbEnum";
import DbSingleton from "./dbSingleton";


class DbClient{
    
    private client?:Client
    private typeOfConnection:TYPE_OF_CONNECTION
    private localhost?:Object
    private online?:Object

    constructor(required:{
        typeOfConnection:TYPE_OF_CONNECTION
    },localhost?:{
        host: string,
        port: number,
        database: string,
        user: string,
        password: string,
    },online?:{
        url:string
    }){
        this.localhost = localhost
        this.online = online
        this.typeOfConnection = required.typeOfConnection
        switch(required.typeOfConnection){
            case TYPE_OF_CONNECTION.LOCALHOST:
                if(localhost != null && localhost != undefined){
                    const dbConfig = new DbConfig(localhost.database,localhost.port,localhost.database,localhost.user,localhost.password)
                    this.client = dbConfig.dbInit()
                    return
                }
                throw Error('Falha ao iniciar o Client, pois o objeto LOCALHOST está NULL ou UNDERFINED')
            case TYPE_OF_CONNECTION.URL:
                if(online != null && online != undefined) {
                    const dbConfig = new DbConfig()
                    this.client = dbConfig.dbInitUrl(online.url)
                    return
                }
                throw Error('Falha ao iniciar o client, Pois o objeto ONLINE está NULL ou UNDERFINED')
        }
           
    }


    connect():void{
        if(this.client != null && this.client != undefined){
            let instance = this.client
            this.client.connect(function(err){
                if(!err){
                    DbSingleton.setClient(instance)
                    return console.log('Banco de dados connectado com sucesso!')
                }
                return console.error(err)
            })

        }
    }
   
}

export default DbClient