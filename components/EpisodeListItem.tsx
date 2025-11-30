import Pagination from "./Pagination";

export interface EpisodesListItemProps {
    characterName: string;
    data: any;
    loading: boolean;
    page: number;
    totalPages: number;
    hasPrev: boolean;
    hasNext: boolean;
    next: () => void;
    prev: () => void;
}

export default function EpisodeListItem({
    characterName,
    data,
    loading,
    page,
    totalPages,
    hasPrev,
    hasNext,
    next,
    prev,
}: EpisodesListItemProps) {

    console.log('data en EpisodeListItem', data);
    //TO-DO: FILTRAR LA DATA PORQUE VIENE CON MUCHA BASURA

    const paginationData = {
        currentPage: page,
        totalPages,
        hasPrev,
        hasNext,
        onPrevClick: prev,
        onNextClick: next,
        isLoading: loading,
    }

    return (
        <div className="flex flex-col border border-indigo-600 p-10">
            <h1 className="font-bold">Episode List Character:{characterName}</h1>
            <p className="mb-2 text-sm text-gray-600">
                Total episodios: nose | Mostrando página {page} de {totalPages}
            </p>
            <ul>
                {data?.map((ep: any, index: number) => (
                    <li key={index} className="border-t-4 border-indigo-600">
                        <p>name capitulo: {ep.name}</p>
                        <p>air date: {ep.air_date}</p>
                    </li>
                ))}
            </ul>
            <div className="flex items-center justify-center gap-4">
                <Pagination {...paginationData} />
            </div>
        </div>
    )
}