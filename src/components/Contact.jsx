import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { cn } from '@/lib/utils';
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        success: false,
        error: false,
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        setFormStatus({
            submitting: true,
            success: false,
            error: false,
            message: ""
        });

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                }
            );

            setFormStatus({
                submitting: false,
                success: true,
                error: false,
                message: "Successfully Sent"
            });

            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            setFormStatus({
                submitting: false,
                success: false,
                error: true,
                message: "Oops, your message is failed to send. Please try again."
            });
        }
    };

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Let's <span className="text-primary"> Connect</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out
                I'm always open to discuss new opportunities.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start max-w-7xl mx-auto">

          {/* Left: Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold">Contact Me</h3>
              <p className="mt-2 text-muted-foreground">
                Feel free to reach out. I’ll reply as soon as I can.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex gap-4 rounded-lg border border-border bg-card p-5 max-w-md mx-auto">
                <div className="shrink-0 rounded-full bg-primary/10 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium leading-none text-left block">Email</h4>
                  <a
                    href="mailto:aitam.workfr@gmail.com"
                    className="mt-2 block break-all text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    aitam.workfr@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 rounded-lg border border-border bg-card p-5 max-w-md mx-auto">
                <div className="shrink-0 rounded-full bg-primary/10 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium leading-none text-left block">Location</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Aschaffenburg, Germany
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="rounded-lg border border-border bg-card p-5 max-w-md mx-auto">
              <h4 className="font-medium">Connect with me</h4>

              <div className="mt-4 flex justify-center gap-1">
                <a
                  href="https://n9.cl/d4o10"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-2 py-1.5 text-sm hover:bg-accent transition-colors bg-[hsl(210,90%,40%)] text-[hsl(0,0%,100%)]"
                >
                  <iconify-icon icon="skill-icons:linkedin" width="20" height="20"></iconify-icon>
                  <span className="font-medium text-base">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-lg border border-border bg-card p-6 md:p-8 shadow-sm neon-border mx-4" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-semibold">Send a Message</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Tell me a bit about what you need, and I’ll get back to you.
            </p>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-left block">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Max Mustermann"
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-left block">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                  placeholder="max.musterman@example.com"
                  onChange={handleInputChange}
                />
                <span className="pointer-events-none absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 neon-border"></span>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-left block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Hi! I’d like to ask about..."
                  onChange={handleInputChange}
                />
              </div>

              <motion.button
                type="submit"
                className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2",

                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </motion.button>
              {formStatus.message && (
                <motion.div className={`form-status ${formStatus.success ? "success" : "error"}`}>
                    {formStatus.message}
                </motion.div>
              )}
            </form>
        </div>
      </div>
    </section>
};