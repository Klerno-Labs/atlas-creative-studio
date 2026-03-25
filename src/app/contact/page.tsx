import ContactForm from "@/components/Forms/ContactForm";

export const metadata = {
  title: "Atlas Creative Studio | Contact",
  description: "Get in touch with us to start your project.",
  openGraph: {
    title: "Atlas Creative Studio | Contact",
    description: "Get in touch with us to start your project.",
    images: ["/hero-bg.jpg"],
  },
};

export default function Contact() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-16">Contact Us</h1>
      <ContactForm />
    </div>
  );
}