'use client'
import { useState } from 'react'

export default function WhoAmIButton({
  whoAmIAction,
}: {
  whoAmIAction: () => Promise<string>
}) {
  const [name, setName] = useState<string>()

  return (
    <div>
      <button
        onClick={async () => setName(await whoAmIAction())}
        className="bg-rose-700 hover:bg-rose-800 border-2 border-slate-200 rounded-md px-6 py-2 flex items-center gap-2"
      >
        <span>Who Am I?</span>
      </button>
      <div className="py-2 font-bold">
        {name && (
          <div>
            You are <span className="italic">{name}</span>
          </div>
        )}
      </div>
    </div>
  )
}
