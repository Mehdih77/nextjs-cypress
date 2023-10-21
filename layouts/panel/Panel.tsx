"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Panel() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return <div>Panel</div>;
}
