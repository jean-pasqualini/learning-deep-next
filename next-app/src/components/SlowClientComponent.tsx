'use client'

import { slowResponse } from "@/lib/slowResponse";

const SlowClientComponent = async () => {
  const data = await slowResponse(
    {
      name: "jean",
      time: Date.now() / 1000,
    },
    0,
  );
  return <p>slow client component: {data.name}</p>;
};

export { SlowClientComponent };
