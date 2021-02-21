export interface Program{
    flight_number: number;
    mission_name: string;
    upcoming: boolean;
    launch_year: number;
    launch_date_unix: number;
    is_tentative: boolean;
    tentative_max_precision: string;
    tbd: boolean;
    launch_window: number;
}