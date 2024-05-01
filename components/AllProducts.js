"use-client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import algoliasearch from "algoliasearch/lite";
import {
    InstantSearch,
    RefinementList,
    SearchBox,
    Hits,
} from "react-instantsearch";
const searchClient = algoliasearch(
    "5HMPBBT42H",
    "72136e890bfee3c30dcda8278f4b8639"
);

function AllProducts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "http://demojamstack.somee.com/api/product/get-all-product"
            ).then(i=>{
                
                return i.json()
            }).then(i=>{
                
                return i
            });
            setData(response);
        };
        fetchData()
        
    }, []);
    console.log(data);
    return (
        <InstantSearch searchClient={searchClient} indexName="shop_nkt">
            <RefinementList attribute="brand" />
            <div>
                <div className="container pt-8 ">
                    <h2 className="font-medium text-2xl pb-4">New Product</h2>
                
                    <SearchBox className="" />

                    <div className="grid grid-cols-1 place-items-center sm:place-content-start sm:grid-cols-2 lg: grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                        {data.data != undefined && data.data.length > 0 &&
                            data.data.map((products) => (
                                <>
                                    <div class="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <a href="#">
                                            <img
                                                class="p-8 rounded-t-lg"
                                                src={products.image}
                                                alt="product image"
                                            />
                                        </a>
                                        <div class="px-5 pb-5">
                                            <a href="#">
                                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                    {" "}
                                                    {products.name}
                                                </h5>
                                            </a>
                                            <div class="flex items-center mt-2.5 mb-5">
                                                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                                    <svg
                                                        class="w-4 h-4 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg
                                                        class="w-4 h-4 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg
                                                        class="w-4 h-4 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg
                                                        class="w-4 h-4 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg
                                                        class="w-4 h-4 text-gray-200 dark:text-gray-600"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                </div>
                                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                                                    5.0
                                                </span>
                                            </div>
                                            <div class="flex items-center justify-between">
                                                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                                                    $ {products.price}
                                                </span>
                                                <button className="snipcart-add-item text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Add to cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                    </div>
                </div>
            </div>
        </InstantSearch>
    );
}

export default AllProducts;
