import { NestedPageLayout } from "@/components/NestedPageLayout";
import { TimeElasped } from "@/components/TimeElapsed";
import { slowResponse } from "@/lib/slowResponse";
import { InferGetServerSidePropsType, NextApiResponse } from "next"
import { ReactNode } from "react";

export const getServerSideProps = async ({ res }: {res: NextApiResponse}) => {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=30, stale-while-revalidate=59'
    )
    
    return slowResponse({
        props: {
            you: 'jean',
            time: Date.now() / 1000
        }
    })
}

export default function Component({you, time}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return <div onClick={() => { }}>About {you} on <TimeElasped serverDelay={0} time={time} refresh={true} /></div>
}