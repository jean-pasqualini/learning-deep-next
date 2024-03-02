import { ClientTimeElapsed } from "@/components/ClientTimeElapsed"
import { getInfos } from "@/lib/query"
import 'server-only'

export default async () => {
    const data = await getInfos()

    return <>
        <h3>hello {data.name}</h3>
        <ClientTimeElapsed time={data.time} refresh={false} serverDelay={2} />
        <p>
            {data.time}
        </p>
    </>
}