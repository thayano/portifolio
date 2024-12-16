// import { User } from "@/app/types/user";
// import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        const response = await fetch(`https://api.github.com/user`, {
            headers: {
                'Authorization': `token ${process.env.GITHUB_ACCESS_TOKEN}`
            }
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        return Response.json(data.avatar_url)
    } catch (error) {
        console.log(error)
    }
}