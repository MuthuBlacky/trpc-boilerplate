import { db } from "@/lib/db";
import {router , publicProcedure} from "@/server/trpc";
import * as z from "zod";

export const userRouter = router({
   createUser : publicProcedure.input(z.object({
     user : z.string(),
   })).mutation(({input})=>{
    console.log(input)
     const createdUser = db.userComment.create({
        data :  {
            name : input.user,
        }
     })
     return createdUser;
    }),
});