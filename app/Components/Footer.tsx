export default function Footer() {
    return (
        <footer className="border-t border-neutral-100 px-6 py-8">
            <div className="max-w-5xl mx-auto flex items-center justify-between text-sm text-neutral-500">
                <div className="flex gap-6">
                    <a
                        href="https://github.com/anas207"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-900 transition-colors"
                    >
                        Github ↗
                    </a>
                    <a
                        href="https://www.linkedin.com/in/anas-jawaid/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-900 transition-colors"
                    >
                        Linkedin ↗
                    </a>
                </div>
                <span>©2026</span>
            </div>
        </footer>
    )
}