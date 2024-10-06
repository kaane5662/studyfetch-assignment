"use client"
import { useState } from "react";
import TopicForm from "../components/TopicForm";
import { createExplanation } from "../services/explanations";
import { useRouter } from "next/navigation";

export default function Create(){
    const [error, setError] = useState<string|null>()
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const generateExplanation = async (formData:FormData)=>{
        setLoading(true)
        try{
            setError(null)
            const res = await createExplanation(formData)
            console.log(res)
            if(!res.error) return router.push(`/explanations/${res._id}`)
            setError(res.error)
            setLoading(false)
            
        }catch(error){
            setLoading(false)
        }
        
    }

    return(
        <div className="h-screen p-12 py-16 flex flex-col gap-8 max-md:px-2  items-center">
            <TopicForm loading={loading} error={error} submitFunc={generateExplanation}></TopicForm>
            
           
            
        </div>
    )
}