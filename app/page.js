export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Launch Your Idea Faster 🚀
        </h1>
        <p className="max-w-xl text-lg mb-6">
          DevLaunch helps you turn ideas into real products in days, not months.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">
          Get Started
        </button>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Features</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 shadow rounded-xl">
            ⚡ Fast Development
          </div>
          <div className="p-6 shadow rounded-xl">
            ☁️ Cloud Ready
          </div>
          <div className="p-6 shadow rounded-xl">
            🔒 Secure by Design
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-3xl font-bold mb-12">Pricing</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-xl">Starter</h3>
            <p className="text-2xl my-4">$9/mo</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-xl">Pro</h3>
            <p className="text-2xl my-4">$29/mo</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-bold text-xl">Enterprise</h3>
            <p className="text-2xl my-4">Custom</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build?
        </h2>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold">
          Start Now
        </button>
      </section>

    </main>
  );
}