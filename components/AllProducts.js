import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
function AllProducts() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);
    console.log(data);
    return (
        <div>
            <div className="container pt-8 ">
                <h2 className="font-medium text-2xl pb-4">New Product</h2>
                <div className="grid grid-cols-1 place-items-center sm:place-content-start sm:grid-cols-2 lg: grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {data.map((products, index) => (
                        <>
                            <div className="px-4 border border-gray-200 rounded-xl max-w-[400px] max-h-[300]">
                                <div className="space-y-2 py-2">
                                    <h2 className="text-accent font-medium uppercase">
                                        {products.title}
                                    </h2>
                                    <Image
                                        className="w-auto h-auto"
                                        src={products.image}
                                        
                                        width={200}
                                        height={300}
                                        alt={products.image}
                                    />
                                    <p className="text-gray-500 text-center">
                                        {products.price}$
                                    </p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllProducts;
