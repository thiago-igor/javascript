//Typer
type Order = {
    productId: string;
    price: number;
}

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string; // '?' deixa o passeword opcional
    orders: Order []; //usando Typer entre si
    Login(): string
};

const user: User = {
    firstName: 'thiago',
    age: 22,
    email: 'thiago.maia@,',
    password: 'ola mundo',
    orders: [{productId: "1", price: 200}],
    Login() {
        return 'Ola amigo'
    },
};

const printLog = (menssege: string) =>{}
 
printLog(user.password!) // como password é opcional, passamos '!' para da a certeza que estaremos recebendo uma string

//Unions:
type Author ={
    books: string[]
}

const author: Author & User ={ //unindo type
    age: 2,
    books:['1'],
    email:'thiago@',
    firstName:'Thiago',
    orders:[],
    Login() {
        return 'Ola amigo'
    }
}

//