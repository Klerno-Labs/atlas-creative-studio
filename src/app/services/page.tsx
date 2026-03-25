export const metadata = {
  title: "Atlas Creative Studio | Services",
  description: "Discover the range of services offered by our award-winning creative studio.",
  openGraph: {
    title: "Atlas Creative Studio | Services",
    description: "Discover the range of services offered by our award-winning creative studio.",
    images: ["/hero-bg.jpg"],
  },
};

export default function Services() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-16">Our Services</h1>
      <p className="text-lg text-center max-w-2xl mx-auto">
        We offer a range of creative services tailored to meet your needs, including Branding, Web Design, and Strategy.
      </p>
    </div>
  );
}