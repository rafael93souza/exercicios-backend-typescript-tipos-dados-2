import { readFile, writeFile } from "../01";
import { User } from "./@Types/User";

export async function registerUser(user:User):Promise<void>{
    try {
        const database = await readFile();
        database.users.push(user);
        await writeFile(database);
    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message);    
       }
       throw new Error('Something unexpected happened while writing the file');    
    }
}

export async function listsUsers():Promise<User[]>{
    try {
        const {users} = await readFile();
        console.log(users);
        return users;
    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message);    
       }
       throw new Error('Something unexpected happened while reading the file'); 
    }
}
