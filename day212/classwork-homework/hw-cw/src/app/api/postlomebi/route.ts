import connectDB from "@/app/lib/db"
import { User } from "@/app/lib/models/user/user"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    await connectDB()
    const { name, password } = await req.json()
    const user = await User.create({ name, password })
    return NextResponse.json(user)
}