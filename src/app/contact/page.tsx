import { siteConfig } from "@/config/site";
import Navbar from "@/components/ui/Navbar";
import ContactForm from "@/components/forms/ContactForm";
import Footer from "@/components/ui/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}