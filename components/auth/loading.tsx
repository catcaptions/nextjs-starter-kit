import Image from "next/image"

export const Loading = () => {
    return(
        <div className="h-full w-full flex justify-center items-center">
            <Image src="/logo.svg" alt="logo"/>
        </div>
    )
}