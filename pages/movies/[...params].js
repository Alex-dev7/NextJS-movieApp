import Seo from "@/components/Seo"
import { useRouter } from "next/router"

export default function Detail({params}){
    const router = useRouter()
    const [title, id] = params || []
    return (
        <div>
          <Seo title={title} />
             <h4>{title}</h4>
        </div>
   )
}


// here I am not fetching the api, only getting the title from url
export function getServerSideProps({params:{params}}){

     // console.log(ctx)
     return {
          props:{
               params,
          },
     }
}