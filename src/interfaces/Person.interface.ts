export interface IFile {
    file: string,
    title: string,
    id: number
}

export interface IArmedConflict {
    title: string,
    id: number
}

export interface IMedal {
    id: number,
    title: string,
    image: string
}

export interface IPerson {
    id: number;
    last_name: string;
    first_name: string;
    middle_name?: string | null;
    date_of_birth: string; // ISO 8601 date format (YYYY-MM-DD)
    place_of_birth: string;
    military_commissariat: string;
    military_rank: string;
    medals: IMedal[];
    files: IFile[],
    date_of_death: string; // ISO 8601 date format (YYYY-MM-DD)
    burial_place: string;
    biography?: string | null;
    armed_conflict: IArmedConflict | number;
    photo?: string;
}

export interface IArmedConflictsList {
    title: string
    id: number
}