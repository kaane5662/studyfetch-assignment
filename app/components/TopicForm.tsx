import { useState } from "react"

export default function TopicForm({submitFunc,error,loading}:{submitFunc:any,error:any,loading:any}){
    return(
        <form action = {submitFunc} className=" rounded-md p-12 flex flex-col gap-8 w-[50%] max-md:w-[100%]">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold">What's Your Topic?</h1>
                <h3 className="text-opacity-50 text-md text-black">We love explaining things! Just tell us what you want to learn and your name, and we’ll break it down super simply. Ready?</h3>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-opacity-50 text-black">Name</label>
                    <input required name="name" className="p-2 rounded-md border-2"></input>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-opacity-50 text-black">Topic</label>
                    <input required name="topic" className="p-2 rounded-md border-2 "></input>
                </div>
                <button disabled={loading} className={`bg-black p-4 px-8 rounded-md  text-white ${loading && "bg-opacity-60 animate-pulse"}`}>{loading ? "Generating" :"Let's Go"}</button>
                {error && <p className="text-red-700 text-center">{error}</p>}
                
            </div>
        </form>
    )
}