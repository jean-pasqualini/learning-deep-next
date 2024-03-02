import { ClientTimeElapsed } from "@/components/ClientTimeElapsed";
import { slowResponse } from "@/lib/slowResponse";

async function getData() {
  return slowResponse({
    name: "jean",
    time: Date.now() / 1000,
  }, 2000)
}

export default async function Page() {
  const data = await getData()

  return (
    <div>
      <h3>hi {data.name}</h3>
      <ClientTimeElapsed refresh={false} time={data.time} serverDelay={2} />
      <p>
          {data.time}
      </p>
    </div>
  );
}
