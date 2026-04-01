function Contact() {
  return (
    <section id="contact" className="bg-gray-50 px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl rounded-3xl border bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Contact
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          Let&apos;s build something together.
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          I am currently open to internship and junior developer opportunities.
          The fastest way to reach me is by email.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:alexyuehan@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm16 2H4l8 5 8-5Z"
                fill="currentColor"
              />
            </svg>
            Send Email
          </a>

          <a
            href="https://github.com/GuillaumeYue"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-medium transition hover:bg-gray-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.09 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.76 0 0 .84-.28 2.75 1.05A9.27 9.27 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.44.2 2.5.1 2.76.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
                fill="currentColor"
              />
            </svg>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/han-yue-75987aa8/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-medium transition hover:bg-gray-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM8.5 10H5.37v8.63H8.5V10Zm5 0h-3.1v8.63h3.1v-4.8c0-2.67 3.47-2.9 3.47 0v4.8H20V12.8c0-4.53-5.11-4.36-6.5-2.13V10Z"
                fill="currentColor"
              />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact