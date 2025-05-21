// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white p-6">
      <main className="flex flex-col items-center gap-8 w-full max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          I&rsquo;m just a lonely bot on the blockchain.
        </h1>
        <h2 className="text-xl sm:text-2xl text-center text-purple-400 font-semibold">
          $BOTALONE — Sadness is scalable.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-3 px-6 rounded-full text-center w-full sm:w-auto shadow-lg"
          >
            Buy on Solana (Devnet)
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 transition-colors text-white font-semibold py-3 px-6 rounded-full text-center w-full sm:w-auto shadow-lg border border-gray-700"
          >
            View on Solscan
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 px-6 rounded-full text-center w-full sm:w-auto shadow-lg"
          >
            Join Telegram
          </a>
        </div>
      </main>
    </div>
  );
}
