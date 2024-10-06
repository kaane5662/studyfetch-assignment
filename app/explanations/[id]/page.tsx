import FullExplanation from "@/app/components/FullExplanation";
import { IExplanation } from "@/app/interfaces";
import { getExplanationsById } from "@/app/services/explanations";
import { notFound } from "next/navigation";


export default async function FullExplanationPage({params}:any){
    const {id} = params
    const TopicExplanation:IExplanation = await getExplanationsById(id)
    console.log(TopicExplanation)
    if(!TopicExplanation.explanation){
        return notFound()
    }
    return(
        <main className="h-screen p-12 py-16 max-md:px-0">
            <FullExplanation TopicExplanation={TopicExplanation} ></FullExplanation>
        </main>
    )
}