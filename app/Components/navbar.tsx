import Link from "next/link";

export default function Navbar() {


    return (
        <div className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
            <Link href="/" className="text-md font-medium text-neutral-900">Muhammad Anas</Link>
            <span className="text-sm text-neutral-500">Designer & Developer</span>
        </div>
    );
}