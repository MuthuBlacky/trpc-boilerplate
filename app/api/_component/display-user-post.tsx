import { trpc } from "@/app/_trpc/client";
import { Button } from "@/components/ui/button";
import { EditIcon, Trash2 } from "lucide-react";
const DisplayUserWithPost = () => {
  const user = trpc.post.getAllPost.useQuery();
  console.log(user);
  return (
    <>
      {user.data?.map((item) => {
        return (
          <div className="flex justify-around items-center w-full">
            <div>{item.author.name}</div>
            <div>{item.post}</div>
            <div className="flex w-10">
              <Button
                size={"icon"}
                variant={"outline"}
                className="rounded-full p-4"
              >
                <EditIcon id={item.id} />
              </Button>
              <Button
                size={"icon"}
                variant={"outline"}
                className="rounded-full p-4"
              >
                <Trash2 id={item.id} />
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default DisplayUserWithPost;
