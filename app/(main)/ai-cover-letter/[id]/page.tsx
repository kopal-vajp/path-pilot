import React from "react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CoverLetter({ params }: PageProps) {
  const { id } = await params; // ⬅️ IMPORTANT

  return <div>CoverLetter : {id}</div>;
}
