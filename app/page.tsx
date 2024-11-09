'use client'
import React from 'react'
import Link from 'next/link'

export default function HomePage() {
    return (
    // ChatGPT helped to frame CSS with Tailwind Framework
    <div className="max-w-2xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Flashcard System</h1>
        <h2 className="text-xl text-gray-700 mb-6">By Jayden Gillam</h2>
        <div className="space-y-4">
            <Link href="/flashcards"><button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">Flashcards</button></Link>
            <Link href="/card_listing"><button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition">Card Listing</button></Link>
        </div>
    </div>
    )
}