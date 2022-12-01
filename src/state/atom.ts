import { atom } from 'recoil';
import { IPetList } from 'interface/IPetList';

export const listaDePetsState = atom<IPetList[]>({
    key: 'listaDePetsState',
    default: [
        {
            "nome": "Dunga",
            "idade": "2 anos",
            "porte": "Porte pequeno",
            "sobre": "Calmo e educado",
            "cidade": "Rio de Janeiro (RJ)",
            "imagem": "/imagePets/dunga.svg"
        },
        {
            "nome": "Felícia",
            "idade": "3 meses",
            "porte": "Porte pequeno",
            "sobre": "Ativa e carinhosa",
            "cidade": "Nova Iguaçu (RJ)",
            "imagem": "/imagePets/felicia.svg"
        },
        {
            "nome": "Sírius",
            "idade": "6 meses",
            "porte": "Porte grande",
            "sobre": "Ativo e educado",
            "cidade": "Duque de Caxias (RJ)",
            "imagem": "/imagePets/sirius.svg"
        },
        {
            "nome": "Fiona",
            "idade": "3 anos",
            "porte": "Porte pequeno",
            "sobre": "Calma e carinhosa",
            "cidade": "São Gonçalo (RJ)",
            "imagem": "/imagePets/fiona.svg"
        },
        {
            "nome": "Sid",
            "idade": "8 meses",
            "porte": "Porte médio/grande",
            "sobre": "Brincalhão e amável",
            "cidade": "Rio de Janeiro (RJ)",
            "imagem": "/imagePets/sid.svg"
        },
        {
            "nome": "Yoda",
            "idade": "1 ano",
            "porte": "Porte médio",
            "sobre": "Ativa e carinhoso",
            "cidade": "Nova Iguaçu (RJ)",
            "imagem": "/imagePets/yoda.svg"
        },
        {
            "nome": "Lua",
            "idade": "6 meses",
            "porte": "Porte médio",
            "sobre": "Ativa e carinhosa",
            "cidade": "Duque de Caxias (RJ)",
            "imagem": "/imagePets/lua.svg"
        },
        {
            "nome": "Amora",
            "idade": "45 dias",
            "porte": "Porte grande",
            "sobre": "Calma e carinhosa",
            "cidade": "São Gonçalo (RJ)",
            "imagem": "/imagePets/amora.svg"
        },
        {
            "nome": "Zelda",
            "idade": "5 meses",
            "porte": "Porte médio",
            "sobre": "Ativa e amável",
            "cidade": "Rio de Janeiro (RJ)",
            "imagem": "/imagePets/zelda.svg"
        }
    ]
})