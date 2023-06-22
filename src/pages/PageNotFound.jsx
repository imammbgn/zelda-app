import { Link } from "react-router-dom"


const PageNotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
        <h1 className="text-xl font-semibold">
            PAGE NOT FOUND
        </h1>
        <a className="underline font-medium hover:text-lime-600"><Link to="/">Back To Home</Link></a>
        </div>
    )
}

export default PageNotFound