class Video {
    nome: string;
    thumb: string;
    id_canal: string;
    n_visualizacoes: number;
    data_upload: number;
    gosteis: number;
    descricao: string;
    id_usuario: number;

    constructor(params: {
        nome: string;
        thumb: string;
        id_canal: string;
        n_visualizacoes: number;
        data_upload: number;
        gosteis: number;
        descricao: string;
        id_usuario: number;
    }) {
        this.nome = params.nome;
        this.thumb = params.thumb;
        this.id_canal = params.id_canal;
        this.n_visualizacoes = params.n_visualizacoes;
        this.data_upload = params.data_upload;
        this.gosteis = params.gosteis;
        this.descricao = params.descricao;
        this.id_usuario = params.id_usuario;
    }

}