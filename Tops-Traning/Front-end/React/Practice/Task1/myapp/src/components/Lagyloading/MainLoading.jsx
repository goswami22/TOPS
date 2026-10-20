import { lazy, Suspense, useState } from "react";
// import LazyData from "./LazyData";
const LazyData = lazy(()=> import('./LazyData'))

export default function MainLoading() {
    
    const [load, setLoad] = useState(false) 

    return (
        <div>

            <h1><strong><u>Loading Main Data</u></strong></h1>
            {

                load ? <Suspense fallback={<h1>Data is comming....</h1>}><LazyData /></Suspense> : null

            }
            <button onClick={()=> setLoad(true)}>Load Data </button>
            {/* {
                load ? <LazyData/> : null
            } */}
        </div>
    )
}

