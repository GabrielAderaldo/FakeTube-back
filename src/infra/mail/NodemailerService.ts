import nodemailer, { Transporter } from 'nodemailer'

class NodeMailerService{

    trasporter: Transporter
    host?:string
    service?:string
    port?:number
    secure?:boolean
    auth?:{
        user?:string,
        pass?:string
    }
    
    constructor(host?:string,service?:string,port?:number,secure?:boolean,auth?:{}){
        this.host = host
        this.service = service
        this.port = port
        this.auth = auth
        this.auth = {}
        this.trasporter = nodemailer.createTransport({
            host:this.host,
            service:this.service,
            port:this.port,
            secure:this.secure,
            auth:this.auth
        })
    }


    getTrasporter():Transporter{
        return this.trasporter
    }

    sendEmail(emailTemplate:{from:string,to:string,subject:string,text?:string,html?:string}){
        let email = {from:emailTemplate.from,to:emailTemplate.to,subject:emailTemplate.subject,text:emailTemplate.text,html:emailTemplate.html}
        this.trasporter.sendMail(email,function(err,result){
            if(err) return {code:'error'.toUpperCase(),message:err}
            return {code:'success'.toUpperCase(),message:'mail send with success!',content:result}
        })
    }

    trasporterConnectionTest(){
        this.trasporter.verify(function(err,success){
            if(err) return console.error(err)
            console.log('Servidor de email pronto para funcionar apropiadamente...')
        })
    }

}

export default NodeMailerService