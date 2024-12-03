export default function Home() {
  return (
    <div>
      <div className="max-w-md md:mx-auto py-16 px-8 md:px-0">
        <h1 className="text-5xl font-bold">contact</h1>

        <div className="flex flex-col space-y-4 my-8">
            <input className="border px-4 py-2 rounded-lg shadow" placeholder="Title / タイトル" />
            <input className="border px-4 py-2 rounded-lg shadow" placeholder="Email Address / メアド" />
            <textarea placeholder="Subject / 要件" className="border px-4 py-2 rounded-lg shadow h-32" />
        </div>

        <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-full">Submit</button>
      </div>
    </div>
  )
}