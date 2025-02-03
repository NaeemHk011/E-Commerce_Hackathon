import Link from "next/link";

export default function CancelPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100">
            <h1 className="text-3xl font-bold text-red-700">Payment Canceled</h1>
            <p className="text-lg mt-2 text-gray-700">Your order was not processed. You can try again.</p>
            <Link href="/" className="mt-5 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-800 transition">
                Return to Home
            </Link>
        </div>
    );
}
