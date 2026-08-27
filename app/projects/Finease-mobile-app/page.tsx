import Image from "next/image";
import Link from "next/link";

export default function Fineasemobileapp() {
    return (
        <main className="min-h-screen bg-white text-neutral-900 font-archivo">


            {/* Hero */}
            <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 animate-fade-up delay-100">
                <h1 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight max-w-3xl">
                    FinEase – Building Trust & Reducing Friction in Mobile Financial Management
                </h1>



                {/* Meta info */}
                <div className="mt-12 border-t border-b border-neutral-200 divide-y divide-neutral-200 text-sm animate-fade-up delay-200">
                    <div className="flex justify-between items-center py-3.5">
                        <span className="text-neutral-500">Role</span>
                        <span className="text-neutral-900">Product Design</span>
                    </div>
                    <div className="flex justify-between items-center py-3.5">
                        <span className="text-neutral-500">Timeline</span>
                        <span className="text-neutral-900">6 weeks</span>
                    </div>
                    <div className="flex justify-between items-center py-3.5">
                        <span className="text-neutral-500">Platform</span>
                        <span className="text-neutral-900">iOS/Android</span>
                    </div>
                    <div className="flex justify-between items-center py-3.5">
                        <span className="text-neutral-500">Team</span>
                        <span className="text-neutral-900">1 PM · 2 Engineers · 1 QA · 1 Designer</span>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="max-w-5xl mx-auto px-6 mb-20 animate-scale-in delay-200">
                <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50">
                    <Image
                        src="/finease hero image.png" // Replace with your actual image
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
                    "Increase user retention and reduce failed transfers to lower support costs."


                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
                        <div className="text-4xl font-semibold mb-2">32%</div>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            30-day retention at baseline. Below industry average for a fintech product.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
                        <div className="text-4xl font-semibold mb-2">35%</div>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            Support tickets caused by failed transfers — a clear signal of broken UX.
                        </p>
                    </div>
                </div>

                <p className="text-neutral-600 leading-relaxed max-w-3xl">
                    <strong className="text-neutral-900">Target:</strong> Lift retention to 45% and reduce transfer-related tickets by 25% within 3 months of launch.
                </p>
            </section>

            {/* Key Insights */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="text-3xl font-medium mb-6">Key Insights & User Need</h2>
                <p className="text-neutral-600 leading-relaxed max-w-3xl mb-10">
                    6 user interviews (young professionals, parents, students) revealed deep-seated anxieties about money movement:


                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left column: Quotes */}
                    <div className="space-y-4">
                        <div className="bg-neutral-100 rounded-xl p-6 sm:p-7">
                            <span className="text-3xl text-neutral-400 font-serif block mb-1 leading-none">“</span>
                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                                "I'm always afraid I'll send money to the wrong person."
                            </p>
                        </div>
                        <div className="bg-neutral-100 rounded-xl p-6 sm:p-7">
                            <span className="text-3xl text-neutral-400 font-serif block mb-1 leading-none">“</span>
                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                                "Setting a goal is nice, but I forget about it after a week."
                            </p>
                        </div>
                        <div className="bg-neutral-100 rounded-xl p-6 sm:p-7">
                            <span className="text-3xl text-neutral-400 font-serif block mb-1 leading-none">“</span>
                            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                                "I don't understand why my card gets blocked and how to unblock it."
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
                                Solving these fears directly affects transfer completion (fewer abandoned sends) and retention — users return because they trust the app. Fear of error = abandoned task = churn.
                            </p>
                        </div>
                        <div className="bg-neutral-100 rounded-xl p-6 sm:p-8 flex-1">
                            <h3 className="font-medium text-neutral-900 mb-4 text-base">
                                Jobs to be done:
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">
                                “When I receive extra cash, I want to instantly allocate it to a goal so I don’t spend it.”
                                “When I make a transfer, I want clear confirmation and a way to cancel if I made a mistake.”
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
                                    <td className="px-6 py-5 align-top">Goal progress bar on dashboard</td>
                                    <td className="px-6 py-5 align-top">+30% goal adherence within 30 days</td>
                                    <td className="px-6 py-5 align-top">
                                        Visibility drives action — out of sight, out of mind.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-5 align-top">Biometrics for sends ≤$100, OTP for larger amounts</td>
                                    <td className="px-6 py-5 align-top">+15% transfer completion, security maintained</td>
                                    <td className="px-6 py-5 align-top">
                                        Reduce friction where it's low risk; keep it where users expect it.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-5 align-top">Confirmation modal + 24h cooldown before blocking card</td>
                                    <td className="px-6 py-5 align-top">–40% accidental blocks</td>
                                    <td className="px-6 py-5 align-top">
                                        Users rarely mean to block — confirm intent first.
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-5 align-top">Review screen + 30s undo window after transfer</td>
                                    <td className="px-6 py-5 align-top">-50% “wrong recipient” tickets; +15% confidence</td>
                                    <td className="px-6 py-5 align-top">
                                        Catches user errors without delaying the transfer.
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
                    <h3 className="text-lg font-medium mb-4">Transfer flow — from amount entry to success confirmation</h3>
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 mb-6 bg-neutral-50">
                        <Image
                            src="/image 9 (1).png"
                            alt="Job discovery screen"
                            width={1200}
                            height={700}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="bg-neutral-100 rounded-xl p-6 sm:p-8">
                        <h4 className="font-medium text-neutral-900 mb-3">Design decision — friction where it matters</h4>
                        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                            OTP is only required for transfers above $100. Smaller sends use biometric auth. This directly addressed the user quote "why do I enter OTP every time?" while maintaining security for high-value transactions. I also added a review screen with an undo window after analyzing user quote "I'm always afraid I'll send money to the wrong person."
                        </p>
                    </div>
                </div>

                {/* Job Detail */}
                <div className="mb-16">
                    <h3 className="text-lg font-medium mb-4">Goals flow — making savings visible</h3>
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 mb-6 bg-neutral-50">
                        <Image
                            src="/image 10.png"
                            alt="Job detail screen"
                            width={1200}
                            height={700}
                            className="w-auto h-auto"
                        />
                    </div>
                    <div className="bg-neutral-100 rounded-xl p-6 sm:p-8">
                        <h4 className="font-medium text-neutral-900 mb-3">Goal dashboard widget</h4>
                        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                            Clickable prototype shown to 8 users. 6 clicked the progress bar and said they would update their goal. No one ignored it entirely — proving that visible progress drives engagement. This became a core home screen element.
                        </p>
                    </div>
                </div>

                {/* Employer Flow */}
                <div>
                    <h3 className="text-lg font-medium mb-4">Card management — reducing accidental blocks</h3>
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 mb-6 bg-neutral-50">
                        <Image
                            src="/image 11.png"
                            alt="Employer posting flow"
                            width={1200}
                            height={700}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="bg-neutral-100 rounded-xl p-6 sm:p-8">
                        <h4 className="font-medium text-neutral-900 mb-3">Design decision — confirm before you block</h4>
                        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                            A confirmation modal and 24-hour cooldown was added before card blocking takes effect. Addresses the verbatim: "I don't understand why my card gets blocked." Accidental blocks dropped 38% in beta.
                        </p>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="max-w-5xl mx-auto px-6 mb-24">
                <h2 className="text-3xl font-medium mb-6">Measure & learn</h2>
                <p className="text-neutral-600 leading-relaxed max-w-3xl mb-10">
                    Launched to a beta group of 500 users for 4 weeks. All four hypotheses confirmed or partially confirmed.


                </p>

                <Image
                    src="/image 12.png"
                    alt="Employer posting flow"
                    width={1200}
                    height={700}
                    className="w-full h-auto mt-5 mb-10"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
                        <div className="text-4xl font-semibold mb-2">47%</div>
                        <p className="text-neutral-600 text-sm">
                            30-day retention — exceeded 45% target by 2 points.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
                        <div className="text-4xl font-semibold mb-2">37%</div>
                        <p className="text-neutral-600 text-sm">
                            Failed transfer support tickets — exceeded 25% target


                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}