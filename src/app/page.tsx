"use client";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-green-400 text-white">
          <h1 className="text-5xl font-bold">नवसंदर्भ (Navasandarbh)</h1>
          <p className="text-xl mt-4">
            Simplifying GitHub Contributions for Developers
          </p>
          <Link
            href="/explore"
            className="mt-6 inline-block px-8 py-3 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-100"
          >
            Start Exploring
          </Link>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Why Choose Navasandarbh?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded shadow hover:shadow-md">
                <h3 className="text-xl font-semibold">Find Issues Easily</h3>
                <p className="mt-2 text-gray-600">
                  Search, filter, and bookmark GitHub issues in seconds.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded shadow hover:shadow-md">
                <h3 className="text-xl font-semibold">
                  Personalized Dashboard
                </h3>
                <p className="mt-2 text-gray-600">
                  Track contributions, bookmarks, and ongoing events.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded shadow hover:shadow-md">
                <h3 className="text-xl font-semibold">
                  Hack Open Source Events
                </h3>
                <p className="mt-2 text-gray-600">
                  Never miss events like Hacktoberfest and GSSoC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-12 bg-gradient-to-r from-green-400 to-blue-500 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Open Source Events</h2>
            <p className="text-lg mb-6">
              Stay updated on the latest open-source opportunities.
            </p>
            <Link
              href="/events"
              className="px-6 py-3 bg-white text-green-500 font-semibold rounded shadow hover:bg-gray-100"
            >
              Explore Events
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-gray-900 text-gray-300 text-center">
          <p>&copy; 2024 Navasandarbh. All Rights Reserved.</p>
          <div className="mt-2">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>{" "}
            |{" "}
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
