import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function ProtectedRout() {
  const session = await getServerSession()
  console.log('protectedRout session', !!session)

  if (!session && !session?.user) {
    redirect('/api/auth/signin')
  }

  return (
    <>
      <div className="p-4 rounded-lg flex-1 bg-orange-100 dark:bg-orange-950/50">
        <h1 className="text-3xl">ProtectedRout page</h1>
        <code>This page will see only authtorized users!</code>
      </div>
    </>
  )
}
