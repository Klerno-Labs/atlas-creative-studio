import { Metadata } from "next";
import ContactForm from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Atlas Creative Studio",
  description: "Get in touch with us to start your project.",
};

export default function Contact() {
  return (
    <main className="pt-20">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <ContactForm />
    </main>
  );
}