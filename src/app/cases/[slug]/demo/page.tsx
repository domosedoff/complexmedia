import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseMockup from "@/components/CaseMockup";
import { businessCases, getBusinessCase } from "@/businessCases";

export const metadata: Metadata = {
  title: "Интерфейс решения | Комплекс Медиа",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return businessCases.map((item) => ({ slug: item.slug }));
}

export default async function CaseDemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const item = getBusinessCase((await params).slug);
  if (!item) notFound();

  return (
    <div className="fixed inset-0 z-[60] overflow-auto bg-[#08111f]">
      <CaseMockup slug={item.slug} standalone />
    </div>
  );
}
