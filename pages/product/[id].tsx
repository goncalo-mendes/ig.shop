import { useRouter } from "next/router"

export default function Product(){
  const { query } = useRouter();

  return(
  <div>teste: {JSON.stringify(query)}</div>
  )
}
