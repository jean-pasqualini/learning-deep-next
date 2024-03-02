'use client'

import { useEffect, useState } from "react"
import { TimeElasped } from "./TimeElapsed"
import { create } from "@/app/actions"

const ClientTimeElapsed = ({ time, refresh, serverDelay }: { time: number, refresh: boolean, serverDelay: number }) => {  

    useEffect(() => {
        create()
    })

    return <TimeElasped time={time} refresh={false} serverDelay={serverDelay}  />
}

export { ClientTimeElapsed }