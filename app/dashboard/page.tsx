import Link from "next/link";

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className="text-indigo-600" href="/">
        Dashboard
      </Link>
    </div>
  );
}
