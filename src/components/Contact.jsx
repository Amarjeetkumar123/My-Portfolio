import { useRef, useState } from "react";
import { Github, Linkedin, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion as Motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { profile } from "../data/portfolioData";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast("Email form is not configured yet. Please contact me directly via email.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast.success("Message sent successfully.");
      formRef.current?.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-shell">
      <div className="container-shell space-y-10">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#1e1e1e",
              color: "#fff",
              border: "1px solid #f9b000",
              padding: "12px 16px",
            },
          }}
          containerStyle={{ top: 88, right: 20 }}
        />

        <Motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Contact
        </Motion.h2>

        <Motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Open to software engineering opportunities, product collaboration, and AI-focused roles.
        </Motion.p>

        <div className="grid gap-6 lg:grid-cols-[1fr,1.5fr]">
          <Motion.article
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card space-y-4 p-6"
          >
            <h3 className="text-lg font-semibold">Let&apos;s talk</h3>

            <p className="flex items-center gap-3 text-sm text-gray-300">
              <Phone className="text-[var(--gold)]" size={17} />
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} aria-label="Phone number">{profile.phone}</a>
            </p>

            <p className="flex items-center gap-3 text-sm text-gray-300 break-all">
              <Mail className="text-[var(--gold)]" size={17} />
              <a href={`mailto:${profile.email}`} aria-label="Email address">{profile.email}</a>
            </p>

            <p className="flex items-center gap-3 text-sm text-gray-300">
              <MapPin className="text-[var(--gold)]" size={17} />
              {profile.location}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="ghost-btn text-sm"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="ghost-btn text-sm"
              >
                <Github size={15} /> GitHub
              </a>
            </div>
          </Motion.article>

          <Motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card space-y-4 p-6"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="user_name" className="sr-only">Name</label>
                <Motion.input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Name"
                  className="w-full rounded-lg border border-white/10 bg-[var(--panel)] p-3 text-white outline-none transition focus:border-[var(--gold)]"
                  required
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </div>
              <div>
                <label htmlFor="user_email" className="sr-only">Email</label>
                <Motion.input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-white/10 bg-[var(--panel)] p-3 text-white outline-none transition focus:border-[var(--gold)]"
                  required
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.45 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <Motion.input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="w-full rounded-lg border border-white/10 bg-[var(--panel)] p-3 text-white outline-none transition focus:border-[var(--gold)]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <Motion.textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                className="w-full rounded-lg border border-white/10 bg-[var(--panel)] p-3 text-white outline-none transition focus:border-[var(--gold)]"
                required
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.55 }}
                viewport={{ once: true }}
              />
            </div>

            <Motion.button
              type="submit"
              disabled={loading}
              className="accent-btn w-full disabled:cursor-not-allowed disabled:opacity-70"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "Sending..." : "Send Message"}
            </Motion.button>
          </Motion.form>
        </div>

        <Motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
          className="rounded-xl border border-[rgba(201,163,58,0.25)] bg-[rgba(201,163,58,0.08)] px-4 py-4 text-center text-sm text-gray-200"
        >
          Portfolio designed and developed by <span className="font-semibold text-[var(--gold)]">{profile.name}</span>
        </Motion.footer>
      </div>
    </section>
  );
}
