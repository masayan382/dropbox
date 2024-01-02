import { SignInButton, SignUpButton, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-[#0160FE] w-fit">
          <Image src="/dropbox.png" alt="logo" className="invert" height="50" width="50" />
        </div>
        <h1 className="font-bold text-xl">Dropbox</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center">
        {/* theme toggler */}
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  )
}
export default Header
