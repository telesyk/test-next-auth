'use client'
import { useState, useEffect } from 'react'

export default function APIFromClient() {
  const [name, setName] = useState<string>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/whoAmI')
        const data = await res.json()
        setName(data?.name)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <div>
        API route from <span className="font-bold underline">Client</span>
      </div>
      <div>
        Name: <span className="italic">{name}</span>
      </div>
    </div>
  )
}
