import { db } from "@/lib/db";
import {router ,publicProcedure} from "@/server/trpc";
import * as z from "zod";

export const postRouter = router({
  createPost : publicProcedure.input(z.object({
    authorId : z.string(),
    post : z.string()
  })).mutation(async ({input})=>{
      const createdPost = await db.post.create({
        data : {
            post : input.post,
            authorId : input.authorId
        }
      });
      return createdPost;
  }),
  getAllPost : publicProcedure.query(async ()=> {
    const getAllPost = await db.post.findMany({
      select : {
        author : true,
        authorId : true,
        post : true,
        id : true,
      }
    })
    return getAllPost;
  })
});