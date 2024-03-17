"use client";
import Layout from "@components/Layout";
import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import AnimatedSVG from "@/app/components/AnimatedSVG";
import Link from "next/link";

const Index: NextPage = () => {
  const router = useRouter();
  const { token } = router.query;

  const hasToken = typeof token === 'string';

  useEffect(() => {
    const fetchData = async () => {
      if (typeof token === 'string') {
        try {
          const response = await fetch('/api/handleHash', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
          });

          if (response.ok) {
            console.log('ok');
          } else {
            console.error('auth failed', response.statusText);
          }
        } catch (error) {
          console.error('api error', error);
        }
      }
    };

    fetchData();
  }, [token]);


  return (
    <>
      <div className="bg-gray-200 p-4">
          <h1 className="text-2xl font-bold mb-4">Responsive Container Example</h1>
          <p className="mb-2">
          This container's width will adjust based on the screen size using Tailwind CSS breakpoints.
          </p>
          <p className="mb-2">Customize this content as needed.</p>
          <Link href='/parcours'>Parcours</Link>
      </div>
    </>
  );
}

export default Index;

