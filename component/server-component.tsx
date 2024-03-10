import { serverClient } from "@/app/_trpc/serverClient";

const ServerComponent = async() => {
  const res = await serverClient.test("");
  return <div>{res};</div>;
};
export default ServerComponent;
