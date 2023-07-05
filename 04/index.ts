import { readFile, writeFile } from "../01";
import { User } from "../02/@Types/User";

export async function deleteUser(cpf:string):Promise<User>{
    try {
        const database:{users:User[]} = await readFile();
        const useFindIndex:number = database.users.findIndex((item:User) => item.cpf === cpf);
        if(useFindIndex === -1) {
            throw new Error('User not found')
        }
        const user = database.users[useFindIndex];
        database.users.splice(useFindIndex, 1)
        await writeFile(database);
        return user
    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message);    
       }
       throw new Error('Something Unexpected Happened While Deleting User');   
    }
}

deleteUser("000.000.000-00")