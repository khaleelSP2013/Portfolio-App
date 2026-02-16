import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with your form submission logic (e.g. email API, backend)
    console.log('Contact form:', form)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact-section">
      <h1 className="page-title">Contact Us</h1>
      <p className="contact-intro">Have a project in mind or want to say hi? Send a message and I'll get back to you.</p>
      <div className="contact-wrap">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={5}
            required
          />
          <button type="submit" className="btn btn-primary btn-submit">
            Send Message
          </button>
        </form>
        <div className="contact-info">
          <p>You can also reach out via:</p>
          <ul>
            <li>Email: your@email.com</li>
            <li>LinkedIn: linkedin.com/in/yourprofile</li>
            <li>GitHub: github.com/yourusername</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
