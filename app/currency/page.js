'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CurrencyList() {
    const [currencies, setCurrencies] = useState([]);
    const router = useRouter();

    useEffect(() => {
        // Fetch currency data from JSON Server
        const fetchCurrencies = async () => {
            const response = await fetch('http://localhost:3001/currencies');
            const data = await response.json();
            setCurrencies(data);
        };

        fetchCurrencies();
    }, []);

    const handleAddCurrency = () => {
        router.push('/currency/add');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Currency List</h1>
            <button
                onClick={handleAddCurrency}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded"
            >
                Add Currency
            </button>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="py-3 px-4 border-b">Code</th>
                        <th className="py-3 px-4 border-b">Description</th>
                        <th className="py-3 px-4 border-b">Rate</th>
                        <th className="py-3 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currencies.map((currency) => (
                        <tr key={currency.code}>
                            <td className="py-3 px-4 border-b">{currency.code}</td>
                            <td className="py-3 px-4 border-b">{currency.description}</td>
                            <td className="py-3 px-4 border-b">{currency.rate}</td>
                            <td className="py-3 px-4 border-b">
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
