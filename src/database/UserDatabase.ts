import { UserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "users"

    public insert = async (userDB: UserDB): Promise<void> => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }

    public findByEmail = async (email: string): Promise<UserDB | undefined>  => {
        const result: UserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ email })
        
        return result[0]
    }

    public getAll = async (): Promise<UserDB[]>  => {
        const result: UserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
        
        return result
    }

    public async deletedUserById(id:string):Promise<void>{
        await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .delete()
        .where({id})
    }

    public async findUserById(id:string){
        const [userDB]:UserDB[] | undefined[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .where({id})
        return userDB
    }
}