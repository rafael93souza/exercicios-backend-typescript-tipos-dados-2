import fs from 'fs/promises';

export async function readFile(){
    try {
        const file = await fs.readFile('bd.json', 'utf8');
        const data = JSON.parse(file);
        return data
    } catch (error) {
        if(error instanceof Error){
             throw new Error(error.message);    
        }
        throw new Error('Something unexpected happened while reading the file');    
    }
}

export async function writeFile(data:unknown){
    try {
        const dataWrite = JSON.stringify(data);
        await fs.writeFile('bd.json', dataWrite);
    } catch (error) {
        if(error instanceof Error){
             throw new Error(error.message);    
        }
        throw new Error('Something unexpected happened while writing the file');    
    }
}
