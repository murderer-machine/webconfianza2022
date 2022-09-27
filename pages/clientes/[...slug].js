import { useRouter } from "next/router"

const Home = () => {
    const router = useRouter()
    const slug = router.query.slug || []
    return (
        <>
            <br/><br/><br/>
            <br/><br/><br/>
            Nombres : {slug[0]}<br/>
            Apellidos : {slug[1]}<br/>
        </>
    )
}
export default Home

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const todo = await res.json()
    return {
        props: {
            todo
        },
    }
}
