import axios from "axios"
import { useEffect, useState } from "react"

const ApiProduct = () => {

    useEffect(() => {
        fetchData()
        setLoading(true)
    },[])

    const [product, setProduct] = useState([])
    const [loading, setLoading]  = useState(false)

    const fetchData = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products')
            setProduct(res.data.products)
            setLoading(false)
            // console.log('Product data' ,res.data.products)

        } catch (error) {
            console.log('Api not Found', error)
        }
    }

    return (
        <div>
            <h1>Product Api</h1>

            {
                !loading?
                product && product.map((data, index) => {
                    return (
                        <ul key={index}>
                            <li>Title: {data.title}</li>
                            <li>Category: {data.category}</li>
                            <li><img src={data.images} alt="prodcuct images" width={100}/></li>
                        </ul>
                    )
                })
                :<h1>Data Loading...</h1>
            }
        </div>
    )
}

export default ApiProduct