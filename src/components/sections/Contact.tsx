import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import SectionHeading from '../ui/SectionHeading'
import GradientButton from '../ui/GradientButton'
import FormField from '../ui/FormField'
import ContactInfoItem from '../ui/ContactInfoItem'
import { GitHubIcon, LocationIcon, MailIcon, SendIcon } from '../icons'
import { contactIntro, personal, sectionCopy } from '../../data/personal'

type FormState = {
  name: string
  email: string
  message: string
}

const INITIAL_FORM: FormState = { name: '', email: '', message: '' }

function buildMailtoLink(form: FormState): string {
  const subject = encodeURIComponent(
    `Portfolio contact from ${form.name || 'visitor'}`,
  )
  const body = encodeURIComponent(
    `${form.message}\n\n— ${form.name}\n${form.email}`,
  )
  return `mailto:${personal.email}?subject=${subject}&body=${body}`
}

function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.href = buildMailtoLink(form)
  }

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={sectionCopy.contact.title}
          subtitle={sectionCopy.contact.subtitle}
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-2xl font-bold text-white">Contact Info</h3>
            <p className="mt-4 max-w-md leading-7 text-slate-400">
              {contactIntro}
            </p>

            <ul className="mt-8 space-y-5">
              <ContactInfoItem
                icon={MailIcon}
                label="Email"
                value={personal.email}
                href={`mailto:${personal.email}`}
              />
              <ContactInfoItem
                icon={LocationIcon}
                label="Location"
                value={personal.location}
              />
              <ContactInfoItem
                icon={GitHubIcon}
                label="GitHub"
                value={personal.githubHandle}
                href={personal.github}
                external
              />
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white">Send a Message</h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <FormField
                id="name"
                name="name"
                label="Name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
              <FormField
                id="email"
                name="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@example.com"
                required
              />
              <FormField
                as="textarea"
                id="message"
                name="message"
                label="Message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              />

              <GradientButton type="submit" className="w-full">
                <SendIcon className="h-4 w-4" />
                Send Message
              </GradientButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
