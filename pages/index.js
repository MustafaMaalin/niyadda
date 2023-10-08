import React from 'react';
import Head from 'next/head';
import Hero from "@/sections/Hero";  

export default function Home() {
  return (
    <>
      <Head>
        <title>Niyadda Digital Agency</title>
        <meta name="facebook-domain-verification" content="5i44kv45denfovd72psly5i44za9hf" />
      </Head>
      <Hero />
    </>
  );
}