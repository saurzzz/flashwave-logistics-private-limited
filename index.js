import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-6">
      <Head>
        <title>FlashWave Logistics</title>
      </Head>

      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-blue-800 mb-4">FlashWave Logistics</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Swift Solutions. Swift Deliverables. Revolutionizing logistics with speed, reliability, and innovation.
        </p>
        <div className="mt-6">
          <button className="text-white bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-2xl shadow-xl">
            Get Started →
          </button>
        </div>
      </section>

      <footer className="mt-24 text-center text-sm text-gray-500">
        © 2025 FlashWave Logistics Pvt Ltd. All rights reserved.
      </footer>
    </div>
  );
}
