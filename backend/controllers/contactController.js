import Contact from '../models/Contact.js'

export async function createContact(req, res) {
  try {
    const { name, email, phone, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message are required.' })
    }

    const contact = await Contact.create({ name, email, phone, message })
    res.status(201).json({ message: 'Message received. We will get back to you shortly.', contact })
  } catch (err) {
    res.status(500).json({ message: 'Failed to save your message. Please try again later.' })
  }
}

export async function getContacts(req, res) {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch messages.' })
  }
}
