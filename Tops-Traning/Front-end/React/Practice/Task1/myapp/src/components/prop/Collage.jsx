// export default function Collage({collageName}){
//     return(
//         <div>
//             <h1>{collageName[1]}</h1>
//         </div>
//     )
// }

export default function Collage({ cname }) {
    console.log(cname)
    return (
        <div>
            <h1>Collage Nwme: </h1>
            <h1>{cname}</h1>
        </div>
    );
}