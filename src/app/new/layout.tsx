import type { Metadata } from "next";
import MainLayout from "@/components/Home/MainLayout";

export const metadata: Metadata = {
	title: "My Capital One — New",
	description: "Preview new features and experiments",
};

export default function NewLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <MainLayout>{children}</MainLayout>;
}

