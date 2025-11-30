import { fetchEpisodesSummary } from '@/domain/fetchEpisodeSummary';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ids } = body;

    const dto = await fetchEpisodesSummary(ids);
    
    return NextResponse.json(dto);
  } catch (error) {
    console.error('Error en /api/episodes:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
