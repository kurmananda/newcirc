import { redirect } from "next/navigation";

export const metadata = {
  title: "GATE Mock Test",
  description:
    "Dhanak 2k25 is a cultural fest organised by the students of Indian Institute of Space Science and Technology, Thiruvananthapuram.",
  icons: {
    icon: "images/icon.png", // /public path
  },
  url: "https://dhanak.iist.org.in",
  type: "website",
  siteName: "Dhanak 2k25",
};

export default function Home() {
  redirect("/home");
}
