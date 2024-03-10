"use client";

import { trpc } from "@/app/_trpc/client";

const ClientComponent = () => {
  const testRes = trpc.test.useQuery("muthu pandi");
  return <div>{testRes.data};</div>;
};
export default ClientComponent;
