import { auth } from "@clerk/nextjs"

function Dashboard() {
  const { userId } = auth()
  return <div>Dashboard</div>
}
export default Dashboard
