import { redirect } from "next/navigation";

export const metadata = {
  title: "Study Circuit",
  description:"an initiative to help students",
  icons: {
    icon: "images/icon.png", // /public path
  },
  url: "https://studycircuit.vercel.app",
  type: "website",
  siteName: "Dhanak 2k25",
};

export default function Home() {
  redirect("/home");
}
