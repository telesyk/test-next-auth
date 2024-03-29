import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <>
      <div className="p-4 rounded-lg flex-1 bg-orange-100 dark:bg-orange-950/50">
        <h1 className="text-3xl">Home page</h1>
        <code>
          getServerSession Result
          {!!session?.user?.name ? (
            <div>{session.user.name}</div>
          ) : (
            <div>Not logged in user</div>
          )}
        </code>
      </div>
    </>
  )
}
