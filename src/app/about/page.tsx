export const metadata = {
  title: "Atlas Creative Studio | About",
  description: "Learn more about our team and the philosophy behind our award-winning creative studio.",
  openGraph: {
    title: "Atlas Creative Studio | About",
    description: "Learn more about our team and the philosophy behind our award-winning creative studio.",
    images: ["/hero-bg.jpg"],
  },
};

export default function About() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-16">About Us</h1>
      <p className="text-lg text-center max-w-2xl mx-auto">
        We are a passionate team of creative professionals dedicated to delivering exceptional design work across multiple disciplines.
      </p>
    </div>
  );
}