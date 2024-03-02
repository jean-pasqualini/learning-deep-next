import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/ping')) {
        return Response.json("pong")
    }

    if (request.method === "PURGE") {
        revalidatePath("/pages-mode/incrementals-static-regeneration/8989") //request.nextUrl.pathname)
        return Response.json("purged")
    }

    return NextResponse.next()
}