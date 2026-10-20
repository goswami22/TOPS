export default function Test1({userinfo}){
    return(
        <div>
            <hr />
            {/* <h1>My Name  is {name} and my age {age}</h1> */}
            <h1>Name : {userinfo.name}</h1>
            <h1>age : {userinfo.age}</h1>
        </div>
    )
}