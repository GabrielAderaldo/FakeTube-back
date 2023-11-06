import { Transport } from "nodemailer";

class TrasporterSingleton{

    private static instance?:any

    static setInstance(instance:any){
        if(instance == null || instance == undefined){
            return console.error({code:'INTERNAL_ERROR_NODEMAILER',message:'Falha ao instanciar o singleton do nodemailer, verificar o que pode ser.'})
        }

        this.instance = instance

    }

    static getInstance(){
        return this.instance
    }

}

export default TrasporterSingleton