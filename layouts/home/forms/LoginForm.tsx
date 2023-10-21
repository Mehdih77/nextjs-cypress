"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/button/Button";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const [error, setError] = useState(false);

  const router = useRouter();
  const handleLogin = () => {
    if (form.email === "test" && form.password === "1234") {
      router.push("/dashboard");
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center gap-5 p-24">
      <input
        className="h-10 min-w-[250px] rounded-md border border-blue-500 p-3"
        type="text"
        name="email"
        value={form.email}
        onChange={(e) => handleChange(e)}
        placeholder="email"
        autoComplete="off"
      />
      <input
        className="h-10 min-w-[250px] rounded-md border border-blue-500 p-3"
        type="password"
        value={form.password}
        onChange={(e) => handleChange(e)}
        name="password"
        placeholder="password"
      />
      {error && (
        <span className="text-sm text-red-500">
          Email Or Password Is Incorrect!
        </span>
      )}
      <Button handleClick={handleLogin} />
    </div>
  );
}
