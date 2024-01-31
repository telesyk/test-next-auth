'use client'
import Link from 'next/link'
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa'
import { signIn, signOut, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const ACTIVE_ROUTE = 'p-2 text-slate-300 bg-slate-800'
const INACTIVE_ROUTE =
  'p-2 text-slate-500 hover:text-slate-300 hover:bg-slate-800'

function UserAvatar({ image }: { image: string | undefined | null }) {
  return (
    <>
      {!image ? (
        <FaUserCircle />
      ) : (
        <div className="w-5 h-5 rounded-full border-2 border-slate-100">
          <Image alt="avatar" src={image} width={16} height={16} />
        </div>
      )}
    </>
  )
}

function AuthButton() {
  const { data: session } = useSession()
  const pathname = usePathname()

  if (session) {
    return (
      <>
        <div className="text-bold flex gap-2 items-center">
          <UserAvatar image={session?.user?.image} />
          {session?.user?.name}
        </div>
        <div className="pb-8 border-b-2">
          <button
            onClick={() => signOut()}
            className="bg-rose-700 hover:bg-rose-800 border-2 border-slate-200 rounded-md px-6 py-2 flex items-center gap-2"
          >
            <FaSignOutAlt />
            <span>Sign out</span>
          </button>
        </div>
        <ul className="my-8 flex flex-col gap-2">
          <li className={pathname === '/' ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              pathname === '/protected' ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            <Link href="/protected">Protected</Link>
          </li>
          <li
            className={
              pathname === '/server-action' ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            <Link href="/server-action">Server Action</Link>
          </li>
          <li
            className={
              pathname === '/api-from-client' ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            <Link href="/api-from-client">API from Client</Link>
          </li>
          <li
            className={
              pathname === '/api-from-server' ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            <Link href="/api-from-server">API from Server</Link>
          </li>
        </ul>
      </>
    )
  }

  return (
    <>
      <div className="italic text-slate-700 dark:text-slate-300">
        Not authorized
      </div>
      <div>
        <button
          onClick={() => signIn()}
          className="bg-green-700 hover:bg-green-800 border-2 border-slate-200 rounded-md px-6 py-2 flex items-center gap-2"
        >
          <FaSignInAlt />
          <span>Sign in</span>
        </button>
      </div>
    </>
  )
}

export default function Navbar() {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-lg bg-amber-100 dark:bg-amber-950/70">
      <AuthButton />
    </div>
  )
}
