import { ArrowRightIcon, BeakerIcon, CursorArrowRaysIcon, ShareIcon } from '@heroicons/react/24/outline'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          SketchFlow
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Unleash your creativity with our intuitive whiteboarding tool. Collaborate in real-time, 
          sketch ideas, and bring your visions to life.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
          Start Drawing Now
          <ArrowRightIcon className="h-5 w-5 ml-2 inline-block" />
        </button>
      </header>
      {/* Features Section */}
      <section className="container mx-auto px-4 py-2">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Powerful Features, Simple Interface
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <CursorArrowRaysIcon className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-3">Intuitive Tools</h3>
            <p className="text-gray-600">
              Natural drawing experience with pen, shapes, text, and multiple color options.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <ShareIcon className="h-12 w-12 text-purple-600 mb-6" />
            <h3 className="text-xl font-semibold mb-3">Real-time Collaboration</h3>
            <p className="text-gray-600">
              Invite team members and collaborate simultaneously on the same canvas.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <BeakerIcon className="h-12 w-12 text-green-600 mb-6" />
            <h3 className="text-xl font-semibold mb-3">Export & Share</h3>
            <p className="text-gray-600">
              Save your work in multiple formats and share easily with your team.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Bring Your Ideas to Life?
          </h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2023 SketchFlow. All rights reserved. Built with ❤️ for creative minds.</p>
        </div>
      </footer>
    </div>
  )
}
