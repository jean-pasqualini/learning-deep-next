import { useEffect, useState } from "react"

const Status = ({ elapsedTime, staled } : { elapsedTime: number, staled: number }) => {
    if (elapsedTime === 0) {
        return "fresh"
    }

    if (staled > -1) {
        return <span style={{ color: "red" }}>staled</span>
    }

    return <span style={{ color: "green" }}>hit</span>
}

const TimeElasped = ({ time, refresh, serverDelay = 0 }: { time: number, refresh: boolean, serverDelay: number }) => {
    const [now, setNow] = useState(time)

    console.log("time start")
    useEffect(() => {
        setNow(Date.now() / 1000)
        console.log("time effect")
        refresh && setTimeout(() => {
            document.location.href = document.location.href
        }, 1000)
    }, [time])

    const elapsedTime = Math.floor(now - time) - serverDelay
    const staled = elapsedTime > 30 ? now - (time + 30) : -1

    return (
        <fieldset id="cache">
            <legend>
                version: <Status elapsedTime={elapsedTime} staled={staled} />
            </legend>
            <p>
            {staled > -1 ? "staled from " + staled + "s" : elapsedTime + "s in cache"}
            </p>
        </fieldset>
    )
}

export { TimeElasped }