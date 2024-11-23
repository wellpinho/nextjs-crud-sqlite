import Link from "next/link";

export default function NotFound() {
    return (
        <div className="container mx-auto">
            <div className="mx-auto w-96 border bg-white border-gray-400 p-4 rounded">
                <h2 className="text-gray-800 text-2xl">Page Not Found</h2>
                <p className="text-gray-600">
                    Could not find requested resource
                </p>
                <Link
                    href="/"
                    className="text-blue-600 font-semibold hover:text-blue-400"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
