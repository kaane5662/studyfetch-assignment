import { IExplanation } from "../interfaces";

export default function FullExplanation({TopicExplanation}:{TopicExplanation:IExplanation}){
    return(
        <div className="flex flex-col gap-4 self-start  p-8 max-md:px-4 rounded-xl">
            <h1 className="text-4xl font-bold">{TopicExplanation?.name}</h1>
            <div className="flex flex-col ">
                <h2 className="text-black text-opacity-50">asked about</h2>
                <h1 className="text-md text-white bg-black p-1 px-4 w-fit rounded-full">{TopicExplanation?.topic}</h1>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-black text-opacity-50">Here's the answer</h2>
                <p className="text-md whitespace-pre-line max-md:text-sm ">{TopicExplanation?.explanation}</p>
            </div>
            
            
        </div>
    )
}