import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import  connectToDB  from '@/lib/mongodb';
import Lead from '@/models/Lead';

interface LeadRequestBody {
  name: string;
  email: string;
  phone: string;
  projectDescription: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadRequestBody = await req.json();

    const { name, email, phone, projectDescription } = body;

    if (!name || !email || !phone || !projectDescription) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    await connectToDB();

    const newLead = await Lead.create({ name, email, phone, projectDescription });

    return NextResponse.json(
      { success: true, lead: newLead },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
