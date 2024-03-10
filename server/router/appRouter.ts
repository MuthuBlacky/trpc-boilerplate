import {router , publicProcedure} from "../trpc";
import * as z from "zod";
import { postRouter } from "./postRouter";
import { userRouter } from "./userRouter";
export const appRouter = router({
    test : publicProcedure.input(z.string()).query(async (opts)=>{
        return "Hi" + opts.input;
    }),
    post : postRouter,
    user : userRouter
})
export type AppRouter = typeof appRouter;