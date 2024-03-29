import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
      <footer className="border-t">
          <div className="flex-center wrapper flex-between flex-col gap-4 p-5 text-center sm:flex-row">
            <Link href='/'></Link>
            <Image src = 'assets/images/logo.svg'
              alt = 'logo'
              width={128}
              height={38}
            />
            <p className="text-sm">2024 IPU EVENTS. All Rights Reserved.</p>
          </div>
      </footer>
  )
}

export default Footer
