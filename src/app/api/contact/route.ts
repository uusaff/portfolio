import { NextRequest, NextResponse } from 'next/server'

interface ContactBody {
  name: string
  email: string
  subject: string
  message: string
  company?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactBody = await request.json()
    const { name, email, subject, message } = body

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'All required fields must be filled' }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    if (message.trim().length < 20) {
      return NextResponse.json({ error: 'Message must be at least 20 characters' }, { status: 400 })
    }

    console.log('Contact form submission:', { name, email, subject, message, company: body.company })

    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }
}
