import Topic from "@/app/schemas/Topic"
import { NextApiHandler, NextApiRequest } from "next"
import { NextRequest,NextResponse } from "next/server"

export async function GET(req:NextRequest, {params}:any){
    try{
        const {id} = params
        console.log(id)
        const topic = await Topic.findById(id)
        return NextResponse.json(topic,{status:200})
        
    }catch(error:any){
        console.log(error)
        return NextResponse.json({error:error?.message},{status:500})
    }
}