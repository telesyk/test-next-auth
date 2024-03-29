import { getServerSession } from 'next-auth'
import WhoAmIButton from './WhoAmIButton'

export default async function ServerAction() {
  const whoAmI = async () => {
    'use server'
    const session = await getServerSession()
    return session?.user?.name || 'Not authorized'
  }

  return (
    <div>
      <WhoAmIButton whoAmIAction={whoAmI} />
    </div>
  )
}
