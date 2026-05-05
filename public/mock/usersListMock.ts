import { UserType } from "@/types/userType";

export const usersListMock:UserType[] = [
  {
    id: 1,
    name:"Lucas Machado",
    email:"lucasmachado@email.com",
    password:"12345",
    token:"4321",
    createAt:new Date('2024-01-01'),
    _count:1,
    posts:[
      {
        id: 1,
        title: "Titulo qualquer",
        content: "A razão pela qual os webinars formam uma parte importante do marketing de conteúdo B2B é porque eles se harmonizam bem com os objetivos de B2B. Mesmo que seu produto ou serviço seja de alta qualidade, você poderá fechar negócios se seu seminário online for envolvente o suficiente.",
        reactUp: 10,
        reactDown: 2,
        userId: 1,
        createdAt: new Date('2024-01-01'),
        author: {
          name: "Lucas Machado"
        }
      }
    ],
  },
  {
    id: 2,
    name:"Gabriel Barbosa",
    email:"gabrielbarbosa@email.com",
    password:"12345",
    token:"4321",
    createAt:new Date('2024-01-02'),
    _count:1,
    posts:[ 
      {
        id: 1,
        title: "Titulo qualquer",
        content: "Convidar clientes B2B para um seminário online pode reduzir o ciclo de vendas de seu produto. Os webinars tendem a ter uma alta taxa de engajamento e, portanto, levam a melhores conversões.",
        reactUp: 5,
        reactDown: 1,
        userId: 2,
        createdAt: new Date('2024-02-02'),
        author: {
          name: "Gabriel Barbosa"
        }
      }
    ],
  },
  {
    id: 3,
    name:"Thiago Souza",
    email:"thiagosouza@email.com",
    password:"12345",
    token:"4321",
    createAt:new Date('2024-01-03'),
    _count:1,
    posts:[
      {
        id: 1,
        title: "Titulo qualquer ",
        content: "Para saber mais sobre cada uma dessas ferramentas de landing page, continue a ler o artigo. Se preferir, clique em um dos itens da lista acima para ler sobre algum item específico.",
        reactUp: 7,
        reactDown: 0,
        userId: 3,
        createdAt: new Date('2024-03-01'),
        author: {
          name: "Thiago Souza"
        }
      }
    ],
  }
];

