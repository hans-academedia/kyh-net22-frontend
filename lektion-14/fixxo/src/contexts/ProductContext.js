import { createContext, useContext, useState } from "react";

const ProductContext = createContext()

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({children}) => {
    const apiUrl = "https://kyh-net22.azurewebsites.net/api/products"
    const [all, setAll] = useState([])
    const [featured, setFeatured] = useState([])
    const [latest, setLatest] = useState([])
    const [popular, setPopular] = useState([])

    const getAllAsync = async () => {
        const res = await fetch(`${apiUrl}`)
        setAll(await res.json())
    }
    const getFeaturedAsync = async () => {
        const res = await fetch(`${apiUrl}/featured`)
        setFeatured(await res.json())
    }
    const getLatestAsync = async () => {
        const res = await fetch(`${apiUrl}/new`)
        setLatest(await res.json())
    }
    const getPopularAsync = async () => {
        const res = await fetch(`${apiUrl}/popular`)
        setPopular(await res.json())
    }

    return <ProductContext.Provider value={{all, featured, latest, popular, getAllAsync, getFeaturedAsync, getLatestAsync, getPopularAsync}}>
        {children}
    </ProductContext.Provider>

}