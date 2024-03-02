import { slowResponse } from "./slowResponse"
import 'server-only'

const getInfos = () => {
    return slowResponse({
        name: 'jean',
        time: Date.now() / 1000
    }, 0)
}

export { getInfos }