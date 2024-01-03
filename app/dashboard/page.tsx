import Dropzone from "@/components/Dropzone"
import { auth } from "@clerk/nextjs"

function Dashboard() {
  const { userId } = auth()
  return (
    <div>
      <Dropzone />
    </div>
  )
}
export default Dashboard
