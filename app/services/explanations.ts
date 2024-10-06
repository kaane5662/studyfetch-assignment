
export async function createExplanation(formData:FormData){
    
    try{
        const res = await fetch("/api/topics",{method:'POST',body:formData})
        return await res.json()
    }catch(error){
        console.log(error)
        return {error:"An unexpected error has occured"}
    }
}

export async function getExplanations(){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/topics`,{method:'GET',next:{revalidate:60}})
        return await res.json()
    }catch(error){
        console.log(error)
        return null
    }
}

export async function getExplanationsById(id:string){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/topics/${id}`,{method:'GET',next:{revalidate:60}})
        return await res.json()
    }catch(error){
        console.log(error)
        return null
    }
}

export async function getExplanationsByQuery(name:string,order:string){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/topics?name=${name}&order=${order}`,{method:'PUT'})
        return await res.json()
    }catch(error){
        console.log(error)
        return null
    }
}
