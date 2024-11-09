'use client'
import React, { useState, useEffect } from "react";
import Link from 'next/link'

export default function FlashcardView() {
    const [prompt, setPrompt] = useState("")
    const [answer, setAnswer] = useState("")
    const [percentUnderstood, setPercentUnderstood] = useState(0)
    
    const [position, setPosition] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false)

    // used https://designcode.io/react-hooks-handbook-fetch-data-from-an-api to help fetch data from json file
    useEffect(() => {
        const fetchData = async () => {
            const file = await fetch("data.json");
            const objects = await file.json();
            
            setPrompt(objects[position].prompt);
            setAnswer(objects[position].answer);
            setPercentUnderstood(objects[position].percentUnderstood);
        };
        
        fetchData();
    }, [position]);

    return (
    // ChatGPT helped to frame CSS with Tailwind Framework
    <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Flashcards</h1>
        <h3 className="text-lg font-semibold text-center text-blue-500 hover:underline">{<Link href="/card_listing">To Card Listing</Link>}</h3>
        <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{prompt}</h2>
                <p className="text-gray-700 text-base mt-4 mb-4">{showAnswer ? answer : ""}</p>
                <p className="text-gray-500 text-sm">Understood: {percentUnderstood}%</p>
                <button className="text-blue-500 hover:underline mt-2" onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? "Hide Answer" : "Show Answer"}</button>
            </div>
            <div className="flex justify-around mt-6">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition" 
                // ChatGPT used to help figure out function
                onClick={() => {setPosition((prev) => (prev + 1) % 10)}}>Easy</button>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
                onClick={() => {setPosition((prev) => (prev + 1) % 10)}}>Medium</button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                onClick={() => {setPosition((prev) => (prev + 1) % 10)}}>Hard</button>
            </div>
        </div>
    </div>
    );
}