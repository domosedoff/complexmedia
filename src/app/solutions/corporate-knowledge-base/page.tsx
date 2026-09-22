import type { Metadata } from "next";
import { SolutionLandingPage } from "@/components/SolutionLandingPage";
import { createPageMetadata } from "@/seo";
import { getSolutionPage } from "@/solutionPages";

const solution = getSolutionPage("corporate-knowledge-base");
export const metadata: Metadata = createPageMetadata({ title: solution.title, description: solution.description, path: `/solutions/${solution.slug}` });
export default function Page() { return <SolutionLandingPage solution={solution} />; }
