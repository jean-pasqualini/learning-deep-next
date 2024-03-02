import { TimeElasped } from "@/components/TimeElapsed"

export default function Component({id, time}: {id: string, time: number}) {
    return <div>Content n°{id} on <TimeElasped serverDelay={0} time={time} refresh={true} /></div>
}

export async function getStaticProps(
    context: { params: { id: number }}
) {
    console.log(`\n🏆 Regenerate the page ${context.params.id}\n`)
    return {
        props: {
           id: context.params.id,
           time: Date.now() / 1000
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            //{ params: { id: '1' }}
        ],
        fallback: 'blocking'
    }
}