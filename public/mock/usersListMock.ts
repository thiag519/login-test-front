import { UserType } from "@/types/userType";

export const usersListMock:UserType[] = [
  {
    id: 1,
    name:"Lucas Machado",
    email:"lucasmachado@email.com",
    password:"*****",
    token:"4321",
    createAt:new Date('2024-01-01'),
    _count:1,
    posts:[
      {
        id: 1,
        title: "CSS Frameworks",
        content: "Tailwind CSS é melhor que CSS puro para projetos modernos.",
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
    password:"*****",
    token:"4321",
    createAt:new Date('2024-01-02'),
    _count:1,
    posts:[ 
      {
        id: 1,
        title: "Backend Java",
        content: "Java continua sendo a melhor opção para sistemas corporativos.",
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
    password:"*****",
    token:"4321",
    createAt:new Date('2024-01-03'),
    _count:1,
    posts:[
      {
        id: 1,
        title: "IA substituindo empregos",
        content: "A Inteligência Artificial vai criar mais empregos do que destruir.",
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

