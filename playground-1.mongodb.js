use("Portifolio");
db.dropDatabase()

db.createCollection("trabalhos");
db.createCollection("contratos");

db.trabalhos.insertMany(
    {
        id:1,
        titulo:"Formulário de cadastro",
        descricao:"Formulário de cadastro de site em cores neutras", 
        imagem:"/login_black.png"
    },
    {
        id:2,
        titulo:"Formulário de cadastro",
        descricao:"Formulário de cadastro para rede social no tema azul", 
        imagem:"/shineLogin.png"
    },
    {
        id:3,
        titulo:"Paleta de cores", 
        descricao:"Paleta de cores para projetos figma",
        imagem:"/paleta.png"
    },
    {
        id:4,
        titulo:"Real Aiko", 
        descricao:"Desenho digital com referência fotográfica (Half body)",
        imagem:"/nana.png"
    },
    {
        id:5,
        titulo:"Apolo", 
        descricao:"Desenho digital com referência fotográfica (Half body)",
        imagem:"/apolo.png"
    },
    {
        id:6,
        titulo:"Saiki", 
        descricao:"Desenho digital Fanart (Icon)",
        imagem:"/saiki.png"
    },
    {
        id:7,
        titulo:"Lily", 
        descricao:"Desenho digital (Icon)",
        imagem:"/lily.png"
    },
    {
        id:8,
        titulo:"Atlas", 
        descricao:"Desenho digital com referência fotográfica (Half body)",
        imagem:"/atlas.png"
    },
    {
        id:9,
        titulo:"Ícaro", 
        descricao:"Desenho digital com referência fotográfica (Icon)",
        imagem:"/icaro.png"
    },
    {
        id:10,
        titulo:"Aesthetic photo", 
        descricao:"Desenho digital com referência fotográfica culinária (Icon)",
        imagem:"/comida1.png"
    },
    {
        id:11,
        titulo:"Aesthetic photo", 
        descricao:"Desenho digital com referência fotográfica culinária (Icon)",
        imagem:"/comida2.png"
    },
    {
        id:12,
        titulo:"Hades", 
        descricao:"Desenho digital com referência fotográfica (Icon)",
        imagem:"/hades.png"
    }
)

db.contratos.insertMany(
    {
        id:"",
        nome:"",
        sobrenome:"", 
        mensagem:"",
        contato:""
    }
)