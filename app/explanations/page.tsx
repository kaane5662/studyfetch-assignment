// "use client"
import { notFound, redirect, useSearchParams } from "next/navigation";
import ExplanationCard from "../components/ExplanationCard"
import { IExplanation } from "../interfaces"
import { getExplanations, getExplanationsByQuery } from "../services/explanations"
import { useEffect, useState } from "react";

export default async function Explanations({searchParams}:{ searchParams: { [key: string]: string } }){
    const {name, order} = searchParams || null
    console.log(name)
    
    const newSearch = async (formData:FormData)=>{
        "use server"
        const name = formData.get("name")
        const order = formData.get("order")
        
        redirect(`/explanations?name=${name}&order=${order}`)
    }


    const TopicExplanations:IExplanation[] = !name && !order ? await getExplanations() : await getExplanationsByQuery(name,order)
    if(TopicExplanations == null){
        return notFound()
    }
    return(
        <main className="min-h-screen p-12 py-16 max-md:px-2 flex flex-col gap-8">
            <div className="gap-2 flex flex-col">
                <h1 className="text-4xl font-bold">All Your Fun Explanations!</h1>
                <h3 className="text-opacity-50 text-md text-black">Here’s a list of all the cool topics we’ve explained. You can see them all right here!</h3>
            </div>
            <form action={newSearch} className="flex gap-4 max-md:grid max-md:grid-cols-2">
                
                <input name="name" placeholder="Search for a name" className="border-2 p-2 w-[30%] max-md:w-[100%] max-md:text-sm  rounded-md max-md:col-span-2"></input>
                <select name="order" className="border-2 w-fit p-2 rounded-md px-4 max-md:text-sm ">
                    <option value={0}>Choose Option</option>
                    <option value={1}>Ascending</option>
                    <option value={-1}>Decending</option>
                </select>
                <button type="submit" className="bg-black p-2 px-4 rounded-md text-white w-fit">Search</button>
            
            </form>
            <div className="flex flex-col gap-2 ">
                {name && (<label>Showing results for {name}</label>)}
                <div className="grid grid-cols-4 gap-8 max-md:grid-cols-1">
                    {TopicExplanations?.map((topicExplanation,index)=>{
                        return(
                            <ExplanationCard key={index} Explanation={topicExplanation}></ExplanationCard>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}