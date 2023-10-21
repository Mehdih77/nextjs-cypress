import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-6 p-24">
      <Link className="text-indigo-600" href="/">
        Dashboard
      </Link>
      <select name="cars" id="cars">
        <option value="bmw">bmw</option>
        <option value="saipa">saipa</option>
        <option value="benz">benz</option>
      </select>
    </div>
  );
}
