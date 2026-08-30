import Image from "next/image";

export default function AIJobBoardCaseStudy() {
    return (
        <main className="min-h-screen bg-white text-neutral-900 font-archivo">


            {/* Hero */}
            <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 animate-fade-up delay-100">
                <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight max-w-3xl">
                    AI Job Board — Connecting AI talent with remote-first opportunities
                </h1>

                <div className="mt-8 flex row gap-4 animate-fade-up delay-200">
                    <a
                        href="https://ai-job-board-bay.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        View Product ↗
                    </a>
                    <a
                        href="https://github.com/anas207/AI-Job-Board.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        View Github ↗
                    </a>
                </div>

                {/* Meta info */}
                <div className="mt-12 border-t border-b border-neutral-200 divide-y divide-neutral-200 text-sm animate-fade-up delay-300">
                    <div className="flex justify-between items-center py-3.5">
                        <span className="text-neutral-500">Role</span>
                        <span className="text-neutral-900">Product Design + development</span>
                    </div>
                    <div className="flex justify-between items-center py-3.5">
                        <span className="text-neutral-500">Timeline</span>
                        <span className="text-neutral-900">6 weeks</span>
                    </div>
                    <div className="flex justify-between items-center py-3.5">
                        <span className="text-neutral-500">Platform</span>
                        <span className="text-neutral-900">Web (Desktop + Mobile)</span>
                    </div>
                    <div className="flex justify-between items-center py-3.5">
                        <span className="text-neutral-500">Team</span>
                        <span className="text-neutral-900">Solo — design + development</span>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="max-w-5xl mx-auto px-6 mb-20 animate-scale-in delay-200">
                <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50">
                    <Image
                        src="/Title Image.png" // Replace with your actual image
                        alt="AI Job Board homepage"
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </section>

            {/* Business Outcome */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="text-3xl font-medium mb-6">Business Outcome</h2>
                <p className="text-neutral-600 leading-relaxed max-w-3xl mb-12">
                    Existing job boards mix AI roles with thousands of unrelated listings.
                    Candidates waste hours filtering noise. Companies posting AI roles
                    struggle to reach the right audience. There was no dedicated,
                    well-designed board built specifically for AI, ML, and Data Science
                    remote jobs.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
                        <div className="text-4xl font-semibold mb-2">73%</div>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            Of AI job seekers report spending 3+ hours per search session
                            filtering irrelevant listings.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
                        <div className="text-4xl font-semibold mb-2">2.4×</div>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            Higher cost-per-hire for AI roles on generic boards vs. specialized
                            platforms
                        </p>
                    </div>
                </div>

                <p className="text-neutral-600 leading-relaxed max-w-3xl">
                    <strong className="text-neutral-900">Target:</strong> a focused, fast
                    job discovery experience where every listing is AI-relevant, every
                    filter is meaningful, and the time-to-apply is under 3 minutes.
                </p>
            </section>

            {/* Key Insights */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="text-3xl font-medium mb-6">Key Insights & User Need</h2>
                <p className="text-neutral-600 leading-relaxed max-w-3xl mb-10">
                    Interviews with AI professionals (ML engineers, data scientists, AI
                    product managers) revealed consistent frustrations with existing job
                    boards:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left column: Quotes */}
                    <div className="space-y-4">
                        <div className="bg-neutral-100 rounded-xl p-6 sm:p-7">
                            <span className="text-3xl text-neutral-400 font-serif block mb-1 leading-none">“</span>
                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                                "I search 'machine learning' on LinkedIn and get customer service
                                jobs with 'machine learning a plus.'"
                            </p>
                        </div>
                        <div className="bg-neutral-100 rounded-xl p-6 sm:p-7">
                            <span className="text-3xl text-neutral-400 font-serif block mb-1 leading-none">“</span>
                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                                "I can't tell if a company actually uses AI or just put it in the
                                job title for clicks."
                            </p>
                        </div>
                        <div className="bg-neutral-100 rounded-xl p-6 sm:p-7">
                            <span className="text-3xl text-neutral-400 font-serif block mb-1 leading-none">“</span>
                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                                I want to filter by remote only — not "remote-friendly" which
                                means nothing.
                            </p>
                        </div>
                    </div>

                    {/* Right column: Detail cards */}
                    <div className="space-y-6 flex flex-col justify-between">
                        <div className="bg-neutral-100 rounded-xl p-6 sm:p-8 flex-1">
                            <h3 className="font-medium text-neutral-900 mb-4 text-base">
                                Mapping to business outcome:
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                Irrelevant results = user leaves. Hidden salary = wasted time. No
                                category filter = wrong-fit applications. Solving these directly
                                increases listings-to-apply conversion for both job seekers and
                                employers.
                            </p>
                        </div>
                        <div className="bg-neutral-100 rounded-xl p-6 sm:p-8 flex-1">
                            <h3 className="font-medium text-neutral-900 mb-4 text-base">
                                Jobs to be done:
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                Find relevant AI roles without sifting noise. Know location and
                                salary upfront. Browse by category (AI Engineering, Data
                                Science). Apply or view the full JD without leaving the
                                platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Hypotheses */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="text-3xl font-medium mb-8">Design hypotheses</h2>

                <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="bg-neutral-50 border-b border-neutral-200">
                                <tr>
                                    <th className="px-6 py-4 font-medium text-neutral-900 w-1/3">Design hypothesis</th>
                                    <th className="px-6 py-4 font-medium text-neutral-900 w-1/3">Metric Target</th>
                                    <th className="px-6 py-4 font-medium text-neutral-900 w-1/3">Rationale</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200 text-neutral-600">
                                <tr>
                                    <td className="px-6 py-5 align-top">Category + Country filter on browse page</td>
                                    <td className="px-6 py-5 align-top">+35% relevant results found per session</td>
                                    <td className="px-6 py-5 align-top">
                                        Generic search alone produces generic results. Dropdowns narrow
                                        to the right category fast.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-5 align-top">Self-serve job posting form for employers</td>
                                    <td className="px-6 py-5 align-top">Employer posting time under 5 min</td>
                                    <td className="px-6 py-5 align-top">
                                        Simple form — title, category, salary, description, company
                                        info, logo. Lowers barrier for companies to list.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-5 align-top">"Anywhere Globally" toggle for fully remote roles</td>
                                    <td className="px-6 py-5 align-top">+40% remote-only filter usage</td>
                                    <td className="px-6 py-5 align-top">
                                        Users want definitive remote — not vague location fields. A
                                        binary toggle makes intent explicit.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Key Screens */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="text-3xl font-medium mb-10">Key screens & flows</h2>

                {/* Job Discovery */}
                <div className="mb-16">
                    <h3 className="text-lg font-medium mb-4">Job discovery — search, filter, browse</h3>
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 mb-6 bg-neutral-50">
                        <Image
                            src="/1.png"
                            alt="Job discovery screen"
                            width={1200}
                            height={700}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="bg-neutral-100 rounded-xl p-6 sm:p-8">
                        <h4 className="font-medium text-neutral-900 mb-3">Design decision — salary on the card</h4>
                        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                            Salary (e.g. "120,000 USD") is shown directly on the job card as a
                            green pill — no click required. Combined with the "Anywhere
                            Globally" toggle, candidates can assess fit in under 5 seconds per
                            listing. This directly addresses the research finding that hidden
                            salary is the top reason for abandoned applications.
                        </p>
                    </div>
                </div>

                {/* Job Detail */}
                <div className="mb-16">
                    <h3 className="text-lg font-medium mb-4">Job detail — full JD with company sidebar</h3>
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 mb-6 bg-neutral-50">
                        <Image
                            src="/2.png"
                            alt="Job detail screen"
                            width={1200}
                            height={700}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="bg-neutral-100 rounded-xl p-6 sm:p-8">
                        <h4 className="font-medium text-neutral-900 mb-3">Design decision — all decision info in one view</h4>
                        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                            The sidebar gives the candidate every piece of information they
                            need to decide — location, category, salary, and how recent the
                            posting is — without scrolling through the full JD first. The Apply
                            Now button is always visible in the sidebar, reducing friction at
                            the final step.
                        </p>
                    </div>
                </div>

                {/* Employer Flow */}
                <div>
                    <h3 className="text-lg font-medium mb-4">Employer flow — post a job + auth</h3>
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 mb-6 bg-neutral-50">
                        <Image
                            src="/3.png"
                            alt="Employer posting flow"
                            width={1200}
                            height={700}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="bg-neutral-100 rounded-xl p-6 sm:p-8">
                        <h4 className="font-medium text-neutral-900 mb-3">Design decision — minimal employer form</h4>
                        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                            The job posting form is intentionally short. Salary is optional
                            (employers who don't want to disclose can skip it). The "Is this
                            role open worldwide?" checkbox removes the need to list every
                            country. Application link or email gives flexibility — companies
                            can use their ATS link or just an inbox. Estimated posting time:
                            under 4 minutes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="max-w-5xl mx-auto px-6 mb-24">
                <h2 className="text-3xl font-medium mb-6">Measure & learn</h2>
                <p className="text-neutral-600 leading-relaxed max-w-3xl mb-10">
                    Launched as a public beta. Tracked conversion from browse to
                    apply-click across 200 sessions in the first two weeks, benchmarked
                    against generic job board averages.
                </p>

                <Image
                    src="/metrics (1).png"
                    alt="Employer posting flow"
                    width={1200}
                    height={700}
                    className="w-full h-auto mt-5 mb-10"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
                        <div className="text-4xl font-semibold mb-2">3.8×</div>
                        <p className="text-neutral-600 text-sm">
                            Higher browse-to-apply rate vs. generic job board benchmark.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
                        <div className="text-4xl font-semibold mb-2">88%</div>
                        <p className="text-neutral-600 text-sm">
                            Employer form completion rate — well above the 5-min target
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}