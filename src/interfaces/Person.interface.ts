export interface IPerson {
    id: number;
    last_name: string;
    first_name: string;
    middle_name?: string | null;
    date_of_birth: string; // ISO 8601 date format (YYYY-MM-DD)
    place_of_birth: string;
    military_commissariat: string;
    military_rank: string;
    awards: string;
    date_of_death: string; // ISO 8601 date format (YYYY-MM-DD)
    burial_place: string;
    biography_facts?: string | null;
    conflicts_participated: number[];
    photo?: string;
}
