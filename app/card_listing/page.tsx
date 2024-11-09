'use client';
import React, { useState, useEffect } from "react";
import Link from 'next/link'


// used ChatGPT to learn how to resolve Vercel Deplyment error
interface Flashcard {
    prompt: string;
    answer: string;
    percentUnderstood: number;
    nextView: number;
}

export default function CardListingView() {
    const [data, setData] = useState<Flashcard[]>([]);

    // used https://designcode.io/react-hooks-handbook-fetch-data-from-an-api to help fetch data from json file

    useEffect(() => {
        const fetchData = async () => {
            const file = await fetch("data.json"); 
            const objects: Flashcard[] = await file.json();
            
            setData(objects);
        };
        
        fetchData();
    }, []);



    return (
    // ChatGPT helped to frame CSS with Tailwind Framework
    <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Card Listing</h1>
        <h3 className="text-lg font-semibold text-center text-blue-500 hover:underline">{<Link href="/flashcards">To Flashcards</Link>}</h3>
        <div className="space-y-4">
            {data.map((card, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-lg border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">{card.prompt}</h2>
                    <p className="text-gray-700 text-base mt-4 mb-4">{card.answer}</p>
                    <p className="text-gray-500 text-sm mt-2">Understood: {card.percentUnderstood}%</p>
                </div>
            ))}
            
            <h2 className="text-lg font-semibold text-center text-blue-500 hover:underline">{<Link href="/add_card">Add Card</Link>}</h2>
        </div>
    </div>
    );
}