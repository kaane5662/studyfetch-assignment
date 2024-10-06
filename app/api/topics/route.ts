import { NextResponse, NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import Topic from "../../schemas/Topic";
import connectMongo from "@/app/helpers/connectMongo";

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
})

connectMongo()
export async function POST(req:NextRequest){
    try{
        const formData = await req.formData()
        // const formData = 
        const name:any = formData.get("name")
        const topic:any = formData.get("topic")
        if(name.length < 2) return NextResponse.json({error: "Enter a valid name"},{status:400})
        if(topic.length < 2) return NextResponse.json({error: "Enter a valid topic"},{status:400})
        console.log(formData)
        console.log(topic)
        const msg:any = await anthropic.messages.create({
            model: "claude-3-5-sonnet-20240620",
            max_tokens: 1024,
            messages: [
                {
                  role: 'user',
                  content: `Explain what ${topic} is like you're talking to a 5-year-old. Use simple words, short sentences, and examples easy for a child to understand.`,
                },
                {
                  role: "assistant",
                  content: 'You are a helpful assistant who explains things clearly who responds ONLY in text.',
                },
            ] 
        });
        console.log(msg)
        if(!msg.content) return NextResponse.json({error:"No content"},{status:400})
        const newTopic = new Topic({
            name,
            topic,
            explanation: msg.content[0].text
        })
        await newTopic.save()
        return NextResponse.json(newTopic,{status:201})
        
    }catch(error:any){
        console.log(error)
        return NextResponse.json({error:error?.message},{status:500})
    }
}

export async function GET(req:NextRequest){
    try{
        const Topics = await Topic.find()
        return NextResponse.json(Topics,{status:200})
        
    }catch(error){
        console.log(error)
        return NextResponse.json({status:500})
    }
}

export async function PUT(req:NextRequest){
    const params = req.nextUrl.searchParams
    const name:any = params.get("name")
    let order:any = params.get("order")
    console.log(order)
    // if(!name || !order) return NextResponse.json("No name query",{status:400})

    try{
        let query = Topic.find()
        const regex = new RegExp(`^${name}`,"i");
        if(name) 
            query = query.where('name').regex(regex)
        order = parseInt(order)
        if(!isNaN(order) && (order == 1 || order == -1) )
            query = query.sort({name:order})
        
        const Topics = await query.exec();
        return NextResponse.json(Topics,{status:201})
    }catch(error:any){
        console.log(error)
        return NextResponse.json({error:error?.message},{status:500})
    }
}