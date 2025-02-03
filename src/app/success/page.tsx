import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
            <h1 className="text-3xl font-bold text-green-700">Payment Successful!</h1>
            <p className="text-lg mt-2 text-gray-700">Thank you for your purchase.</p>
            <Link href="/" className="mt-5 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition">
                Go Back to Home
            </Link>
        </div>
    );
}
