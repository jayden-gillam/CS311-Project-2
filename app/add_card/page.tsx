'use client';
import React from "react";
import Link from 'next/link'

export default function AddCardView() {
    return (
    // ChatGPT helped to frame CSS with Tailwind Framework
    <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Add a New Card</h1>
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
                <div>
                    <h2 className="block text-gray-700 font-semibold mb-2">Prompt</h2>
                    <input className="w-full p-2 border border-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter the prompt here"/>
                </div>
                <div>
                    <h2 className="block text-gray-700 font-semibold mb-2">Answer</h2>
                    <input className="w-full p-2 border border-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter the answer here"/>
                </div>
                <button className="w-full py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">Add Card</button>
        </div>
        <h2 className="text-lg font-semibold text-center text-blue-500 hover:underline">{<Link href="/card_listing">Back to Card Listing</Link>}</h2>
    </div>
    );
}