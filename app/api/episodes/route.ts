import { getEpisodes } from '@/services/episodes';
import { NextRequest, NextResponse } from 'next/server';

//TO-DO: VERLO
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ids } = body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: 'Se requiere un array de IDs' }, { status: 400 });
    }

    const idsString = ids.join(',');

    const data = await getEpisodes(idsString);

    if (!data) {
      return NextResponse.json({ error: 'Error al obtener episodios' }, { status: 500 });
    }

    const episodes = Array.isArray(data) ? data : [data];

    return NextResponse.json(episodes);
  } catch (error) {
    console.error('Error en /api/episodes:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
