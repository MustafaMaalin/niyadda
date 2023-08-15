import React from 'react';
import Head from 'next/head';
import Hero from "@/sections/Hero";  

export default function Home() {
  return (
    <>
      <Head>
        <title>Niyadda Digital Agency</title>
      </Head>
      <Hero />
    </>
  );
}