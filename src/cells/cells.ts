class Cell{
    numberOfCell:string

    constructor(numberOfCell:string){
        this.numberOfCell = numberOfCell
    }

    choseCellToUse(){
        switch(this.numberOfCell){
            case '0':
                console.log('conectado na celula zero, ela será a de produção')
            case '1':
                console.log('conectado na celula UM, ela será a de q.a')
            case '2':
                console.log('conectado na celula 3 de teste de estresse')
        }
    }

}

export default Cell