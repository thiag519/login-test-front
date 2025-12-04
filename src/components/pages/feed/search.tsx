"use client"

import { useState } from "react"

export const Search = () => {
  const [query,setQuery] = useState('')
  return (
    <div className="w-2/4 min-w-40 max-w-130 h-10">
      <input 
        className="w-full  h-10 border-2 border-gray-600 rounded-2xl px-5"  
        type="text" 
        placeholder="Buscar usuários..."
        value={query}
        onChange={() => {}}
      />
    </div>
  )
}