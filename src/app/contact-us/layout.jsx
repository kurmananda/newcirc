export const metadata = {
   title: "Study Circuit",
  description:"an initiative to help students",
  icons: {
    icon: "images/icon.png", // /public path
  },
  url: "https://studycircuit.vercel.app",
  type: "website",
  siteName: "StudyCirc",
};

export default function ContactLayout({ children }) {
  return (
    <section>{children}</section>
  );
}
