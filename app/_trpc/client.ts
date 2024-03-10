import  {type AppRouter } from "@/server/router/appRouter";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>({});