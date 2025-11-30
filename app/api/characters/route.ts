import { getCharacters } from '@/services/characters';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get('page') || '1';

    const data = await getCharacters(page);

    if (!data) {
      return NextResponse.json({ error: 'Error al obtener personajes' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error en /api/characters:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
