"use client";

import { ConvexProvider,AuthLoading, Authenticated, Unauthenticated, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
// import { Loading } from "@/components/auth/loading";
import { ClerkProvider, useAuth } from "@clerk/nextjs";


const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}