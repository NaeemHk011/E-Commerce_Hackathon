
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-sky-300 to-indigo-400 ">
      <h1 className="text-8xl text-left font-bold text-white"><span className='text-sky-300'>4</span><span className='text-indigo-300'>0</span><span className='text-indigo-400'>4</span></h1>
      <p className="text-2xl text-gray-600 mt-4">Oops! Page Not Found</p>
      <p className="text-lg text-gray-600 text-center ">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Go back to Home
        
      </Link>
    </div>
  );
}
