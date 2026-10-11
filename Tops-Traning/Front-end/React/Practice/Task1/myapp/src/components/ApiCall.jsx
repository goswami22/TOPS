
import { useEffect, useState } from "react";

const ApiCall = () => {

    const [api, setapi] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3000/comments";

        fetch(url, {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setapi(data);
            })
            .catch((error) => console.log(error));

    }, []);

    return (
        <div>
            <h1>Comment Api</h1>

            {api.map((data, index) => {
                return (
                    <ul key={data.id ?? index}>
                        <li>{data.body}</li>
                        <li>{data.postId}</li>
                    </ul>
                );
            })}
        </div>
    );
};

export default ApiCall;
