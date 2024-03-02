import { ClientTimeElapsed } from "@/components/ClientTimeElapsed"
import { SlowClientComponent } from "@/components/SlowClientComponent"
import { SlowServerComponent } from "@/components/SlowServerComponent"
import { slowResponse } from "@/lib/slowResponse"
import { Suspense, lazy } from "react"
import dynamic from "next/dynamic"

const LazyNoSSRSlowClientComponent = dynamic(
    () => import('@/components/LazySlowClientComponent'),
    { ssr: false, loading: () => <p>Loading lazy without ssr...</p>, }
)

const LazySSRSlowClientComponent = dynamic(
    () => import('@/components/LazySlowClientComponent'),
    { ssr: true, loading: () => <p>Loading lazy with ssr...</p>, }
)

const LazyReactSlowClientComponent = lazy(() => import('@/components/LazySlowClientComponent'))

export default async () => {
    const data = await slowResponse({
        name: 'jean',
        time: Date.now() / 1000
    }, 2000)

    return <>
        <h3>hello {data.name}</h3>
        <Suspense fallback={<p>Loading slow server component</p>}>
            <SlowServerComponent />
        </Suspense>
        <Suspense fallback={<p>Loading slow client component</p>}>
            <SlowClientComponent />
        </Suspense>
        <LazyNoSSRSlowClientComponent description={"lazy slow client component without ssr"} />
        <LazySSRSlowClientComponent  description={"lazy slow client component with ssr"} />
        <ClientTimeElapsed time={data.time} refresh={false} serverDelay={2} />
        <Suspense fallback={<p>Loading lazy react slow client component</p>}>
            <LazyReactSlowClientComponent description="lazy react show client component" />
        </Suspense>
    </>
}