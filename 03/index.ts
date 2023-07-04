import { readFile, writeFile } from "../01";
import { User } from "../02/@Types/User";

export async function findByUserCPF(cpf:string):Promise<User | null> {
    try {
        const {users} = await readFile();
        const user: User = users.find((user:User) => user.cpf === cpf);
        return user || null;
    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message);    
       }
       throw new Error('Something unexpected happened while reading the file'); 
    }
}

export async function updateUser(user:User):Promise<User>{
    try {
        const database = await readFile();
        const userData: User = database.users.find((item:User) => item.cpf === user.cpf);
        if(!userData) {
            throw new Error('User not found')
        }
        userData.nome = user.nome
        userData.email = user.email
        userData.profissao = user.profissao || userData.profissao
        userData.endereco = user.endereco
        await writeFile(database);
        return user
    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message);    
       }
       throw new Error('Something unexpected happened while writing the file');   
    }
}

updateUser(
    {
    nome:"Rafael Souza",
    cpf:"000.000.000-00",
    email:"rafael@email.com",
    endereco:null,
    profissao:"Desenvolvedor Full Stack"
}
)