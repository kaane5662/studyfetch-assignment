"use client"
// import { redirect } from "next/navigation";
import { IExplanation } from "../interfaces";
import { useRouter } from "next/navigation";

export default function ExplanationCard({Explanation}:{Explanation:IExplanation}){
    const router = useRouter()
    const getFullExplanation =  async (e:any)=>{
        // "use server"
        console.log(Explanation)
        router.push(`/explanations/${Explanation._id}`)
    }

    return(
        <button onClick={getFullExplanation} className="flex flex-col gap-4 p-4 border-2 rounded-xl">
            <div className="flex gap-2 flex-col">
                <h1 className="text-2xl font-bold">{Explanation.name}</h1>
                <p className="w-fit text-sm bg-black text-white rounded-xl items-center flex p-1 px-2">{Explanation.topic}</p>  

            </div>
            <p className="text-sm">{Explanation.explanation.substring(0,350)}...</p>
        </button>
    )
}