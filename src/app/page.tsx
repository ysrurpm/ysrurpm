import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="max-w-md md:mx-auto py-16 px-8 md:px-0">
        <h1 className="text-5xl font-bold">rurp.</h1>
        <p className="font-bold mt-0.5 text-gray-400">らーぷ</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="https://github.com/ysrurpm" target="_blank" rel="noopener noreferrer" passHref>
            <div className="p-4 rounded-lg shadow border flex items-center">
              <div>
                <h2 className="text-2xl">GitHub</h2>
                <p className="text-gray-400">@ysrurpm</p>
              </div>
              <FaGithub className="text-4xl ml-auto text-gray-400" />
            </div>
          </Link>
          <Link href="https://zenn.dev/ysrurpm" target="_blank" rel="noopener noreferrer" passHref>
            <div className="p-4 rounded-lg shadow border flex items-center">
              <div>
                <h2 className="text-2xl">Zenn</h2>
                <p className="text-gray-400">@ysrurpm</p>
              </div>
              <Image src="/zenn-logo.svg" alt="Zenn" width={100} height={100} className="w-9 h-9 ml-auto" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}