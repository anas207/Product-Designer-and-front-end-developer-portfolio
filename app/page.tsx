import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Components/navbar";

const projects = [
  {
    id: 1,
    title: "AI Job Board",
    tags: ["Product Design", "Development"],
    image: "/AI Job Board.png", // replace with your images
    link: "/projects/ai-job-board",
  },
  {
    id: 2,
    title: "Finease mobile app",
    tags: ["Product Design"],
    image: "/finease hero image.png",
    link: "/projects/Finease-mobile-app",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Header */}

      {/* Hero Section */}
      <section className="pt-20 pb-40 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8 justify-center">
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-[32px] overflow-hidden bg-neutral-100 shrink-0 animate-scale-in delay-100">
            {/* Replace with your actual image */}
            <Image
              src="/Anas product Designer.png"
              alt="Muhammad Anas"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col items-start text-left">
            <h1 className="text-3xl md:text-4xl font-normal text-neutral-900 mb-4 leading-tight animate-fade-up delay-200">
              Product Designer and<br />Front end Developer
            </h1>

            <div className="flex flex-wrap gap-2 animate-fade-up delay-300">
              {["Figma", "Next.js", "Tailwind CSS"].map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1 text-xs font-medium rounded-full border border-neutral-200 text-neutral-600 bg-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-6 pb-24 mb-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12 text-neutral-900 animate-fade-up delay-300">
            Case Studies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Link
                key={project.id}
                href={project.link}
                className={`group block animate-fade-up ${idx === 0 ? "delay-300" : "delay-400"}`}
              >
                <div className="mb-3">
                  <h3 className="text-sm font-medium text-neutral-900">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {project.tags.join(" • ")}
                  </p>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2YzZjRmNiIvPgo8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2YzZjRmNiIvPgo8L3N2Zz4=')] bg-repeat" />
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <h2 className="text-2xl font-semibold text-neutral-900 animate-fade-up delay-400">About Me</h2>

          <div className="animate-fade-up delay-500">
            <p className="text-neutral-600 leading-relaxed mb-8">
              Product Designer and Frontend Developer with 5+ years of experience. I design and build digital products end-to-end — combining strong UX thinking with modern frontend development in Next.js and Tailwind CSS.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div className="space-y-2">
                <p className="text-neutral-500">User Research</p>
                <p className="text-neutral-500">Design Systems</p>
                <p className="text-neutral-500">High-Fidelity Prototyping</p>
                <p className="text-neutral-500">Product Strategy</p>
              </div>
              <div className="space-y-2">
                <p className="text-neutral-900 font-medium">Next.js</p>
                <p className="text-neutral-900 font-medium">React.js</p>
                <p className="text-neutral-900 font-medium">Tailwind CSS</p>
                <p className="text-neutral-900 font-medium">Supabase</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}