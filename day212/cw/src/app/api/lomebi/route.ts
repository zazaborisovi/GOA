import connectDB from '@/app/lib/db';
import { User } from '@/app/lib/models/user/user';
import { NextResponse } from 'next/server'

export async function GET() {
    await connectDB()
    const users = await User.find()
    return NextResponse.json(users)
}
export async function POST(req) {
    await connectDB()
    const {username , password } = await req.json()
    const user = await User.create({username , password})
    return NextResponse.json(user)
}