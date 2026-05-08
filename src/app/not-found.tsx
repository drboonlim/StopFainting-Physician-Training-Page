import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-cambridge/10 rounded-full w-24 h-24 flex items-center justify-center mb-6">
        <Heart className="w-12 h-12 text-cambridge" />
      </div>
      <h1 className="text-6xl font-bold text-oxford mb-3">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-3">Page not found</h2>
      <p className="text-gray-500 max-w-md mb-8">
        This page doesn&apos;t exist. Use the navigation above or return to the homepage
        to explore POTS training resources.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="btn-primary">
          Back to Home <ArrowRight className="w-4 h-4 inline ml-2" />
        </Link>
        <Link href="/tools/active-stand-test" className="btn-secondary">
          Active Stand Test Calculator
        </Link>
      </div>
    </div>
  );
}
