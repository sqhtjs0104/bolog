import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        updatedAt: true,
        content: true,
        createdAt: true,
        seriesId: true,
        tags: {
          select: {
            name: true,
          }
        },
        series: {
          select: {
            name: true,
          },
        },
      },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export function OPTIONS() {
  return NextResponse.json(null, { status: 200 });
}
