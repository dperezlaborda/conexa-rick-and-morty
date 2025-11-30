import { fetchCharacterSummary } from '@/domain/fetchCharacterSummary';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page') || '1';

    const dto = await fetchCharacterSummary(page);
    return NextResponse.json(dto);
  } catch (error) {
    console.error('Error en /api/characters:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
