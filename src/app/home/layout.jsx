export const metadata = {
  title: "Study Circuit",
  description:"an initiative to help students",
  icons: {
    icon: "images/icon.png", // /public path},
  url: "https://dhanak.iist.org.in",
  type: "website",
  siteName: "Dhanak 2k25",
};

export default function HomeLayout({ children }) {
  return (
    <section>{children}</section>
  );
}
