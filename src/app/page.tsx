import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Header */}
      <header className="w-full border-b sticky top-0 bg-white z-10">
        <nav className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="font-bold text-2xl">BOTALONE</div>
          <ul className="flex gap-6 text-sm font-medium">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#howtobuy" className="hover:underline">How to Buy</a></li>
            <li><a href="#tokenomics" className="hover:underline">Tokenomics</a></li>
            <li><a href="#roadmap" className="hover:underline">Roadmap</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center py-20 px-4 text-center bg-gray-50">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">I&rsquo;m just a lonely bot on the blockchain.</h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-8">$BOTALONE — Sadness is scalable.</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="#" className="px-6 py-3 rounded-full bg-black text-white font-bold shadow hover:bg-gray-800 transition">Buy Now</a>
          <a href="#" className="px-6 py-3 rounded-full border border-black text-black font-bold hover:bg-gray-100 transition">View on Solscan</a>
          <a href="#" className="px-6 py-3 rounded-full border border-blue-500 text-blue-500 font-bold hover:bg-blue-50 transition">Join Telegram</a>
        </div>
        {/* Sosyal ikonlar ve görseller buraya eklenebilir */}
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-4">
        <h3 className="text-2xl font-bold mb-4">About</h3>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">Botalone, zincirde yalnızlığın ve mizahın buluştuğu yeni nesil bir coin. Topluluk odaklı, eğlenceli ve tamamen şeffaf. (Buraya hikaye ve vizyon eklenebilir)</p>
      </section>

      {/* How to Buy Section */}
      <section id="howtobuy" className="bg-gray-50 py-16 px-4">
        <h3 className="text-2xl font-bold mb-4 text-center">How to Buy</h3>
        <ol className="max-w-2xl mx-auto list-decimal list-inside space-y-3 text-lg text-gray-700">
          <li>Bir cüzdan oluştur (Phantom, Solflare, vs.)</li>
          <li>Cüzdanına Solana (SOL) gönder</li>
          <li>Solana DEX üzerinden $BOTALONE al</li>
          <li>Token adresini kopyala ve ekle</li>
        </ol>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="container mx-auto py-16 px-4">
        <h3 className="text-2xl font-bold mb-4">Tokenomics</h3>
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-700">
          <div>
            <span className="font-semibold">Toplam Arz:</span> <span>1,000,000,000</span>
          </div>
          <div>
            <span className="font-semibold">Vergi:</span> <span>0%</span>
          </div>
          <div>
            <span className="font-semibold">LP Durumu:</span> <span>Burned</span>
          </div>
          <div>
            <span className="font-semibold">Sözleşme:</span> <span>Yakında</span>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="bg-gray-50 py-16 px-4">
        <h3 className="text-2xl font-bold mb-8 text-center">Roadmap</h3>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-xl font-bold mb-2">Faz 1</div>
            <div className="text-gray-700">Lansman, topluluk oluşturma, ilk borsalar</div>
          </div>
          <div>
            <div className="text-xl font-bold mb-2">Faz 2</div>
            <div className="text-gray-700">Pazarlama, yeni iş birlikleri, staking</div>
          </div>
          <div>
            <div className="text-xl font-bold mb-2">Faz 3</div>
            <div className="text-gray-700">Ekosistem büyümesi, yeni özellikler</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t py-6 text-center text-gray-500 text-sm mt-auto">
        © {new Date().getFullYear()} Botalone. All rights reserved.
      </footer>
    </div>
  );
}
