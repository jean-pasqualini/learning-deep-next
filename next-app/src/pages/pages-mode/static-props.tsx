import { TimeElasped } from "@/components/TimeElapsed";
import { slowResponse } from "@/lib/slowResponse";
import { InferGetServerSidePropsType, NextApiResponse } from "next"

export const getStaticProps = async () => {
    return slowResponse({
        props: {
            you: 'jean',
            time: Date.now() / 1000
        }
    })
}

export default function Component({you, time}: InferGetServerSidePropsType<typeof getStaticProps>) {
    return <div>About {you} on <TimeElasped serverDelay={0} time={time} refresh={true} /></div>
}