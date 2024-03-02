import { getInfos } from "@/lib/query";

const SlowServerComponent = async () => {
  const data = await getInfos();
  return <p>slow server component: {data.name}</p>;
};

export { SlowServerComponent };
