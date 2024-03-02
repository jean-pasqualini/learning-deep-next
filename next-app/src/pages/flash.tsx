import { NextPageContext } from "next"

export default function Page ({message} : { message: string})  {
    return <h1>{message}</h1>
}

export function getServerSideProps(context: NextPageContext)  {
    return {
        props: {
            message: context.query.message as string
        }
    }
}