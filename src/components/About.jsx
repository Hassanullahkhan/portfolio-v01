import { User } from "lucide-react";
import DownloadResume from "./DownloadResume";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-4/5 bg-gray-700 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-600 to-gray-700">
                <User size={120} className="text-gray-500" />
              </div>
            </div>
          </div>

          <div
            style={{
              color: "var(--text-color)",
            }}
          >
            <h2 className="text-4xl font-bold  mb-6">
              Driven to Continuous Growth and Technical Excellence
            </h2>

            <div
              className="space-y-4 text-gray-600 leading-relaxed"
              style={{
                color: "var(--text-color)",
              }}
            >
              <p>
                I'm Hassan, a developer who loves learning and staying curious.
                I believe the best code comes from understanding the "why"
                behind it, and I'm passionate about building solutions that
                actually matter. I thrive on solving tricky problems and
                collaborating with teams that push me to grow. I'm at my best
                when I can contribute meaningfully while continuously improving
                alongside talented colleagues.
              </p>

              <p>
                If you like to hire me, or see my resume, click on the download
                button below
              </p>
            </div>

            <button className="mt-8 px-8 py-3 bg-gray-200 text-gray-900 rounded font-medium hover:bg-gray-100 transition-colors">
              <DownloadResume />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
