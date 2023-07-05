import { readFile } from "../01";
import { User } from "../02/@Types/User";

export async function filterUsersByProfession(profession:string):Promise<User[]> {
    try {
        const {users}:{users:User[]} = await readFile();

        const filterUsers:User[] = users.filter((user:User) => user.profissao?.toLowerCase()
        .includes(profession.toLowerCase()));
        return filterUsers;
    } catch (error) {
        if(error instanceof Error){
            throw new Error(error.message);    
       }
       throw new Error('Something Unexpected Happened While filter User'); 
    }
}

filterUsersByProfession("development")