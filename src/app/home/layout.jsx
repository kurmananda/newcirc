export const metadata = {
  title: "GATE Mock",
  description:
    "Dhanak 2k25 is a cultural fest organised by the students of Indian Institute of Space Science and Technology, Thiruvananthapuram.",
  icons: {
    icon: "icon.png", // /public path
  },
  url: "https://dhanak.iist.org.in",
  type: "website",
  siteName: "Dhanak 2k25",
};

export default function HomeLayout({ children }) {
  return (
    <section>{children}</section>
  );
}
