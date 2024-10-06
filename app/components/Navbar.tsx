import Link from "next/link";

export default function Navbar(){
    return(
        <div className="fixed w-full ">
            <div className="p-3 bg-white border-2 justify-center gap-24 flex">
                <Link className="hover:underline duration-100" href={"/create"}>Create</Link>
                <Link className="hover:underline duration-100" href={"/explanations"}>Explanations</Link>

            </div>
        </div>
    )
}