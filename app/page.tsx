import { PrismaClient } from "@prisma/client";
const Home = async () => {
  const prisma = new PrismaClient();
  const user = await prisma.post.findMany({});
  console.log(user);
};
export default Home;
