import { useRouter } from "next/router";

export default function test(){
    const router = useRouter()
    return(
        <div>
            Testing routing: {router.query.slug}
        </div>
    )
}