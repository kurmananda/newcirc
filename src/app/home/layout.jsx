export const metadata = {
   title: "Study Circuit",
  description:"an initiative to help students",
  icons: {
    icon: "images/logo_half.png", // /public path
  },
  url: "https://studycircuit.vercel.app",
  type: "website",
  siteName: "StudyCirc",
};

export default function HomeLayout({ children }) {
  return (
    <section>{children}</section>
  );
}
