const slowResponse = (response: any, delay: number = parseInt(process.env.SLOW_RESPONSE_DELAY as string)): Promise<any> => {
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve(response)
            }, delay)
        }); 
}

export { slowResponse }