export interface Weather {
    resolvedAddress: string;
    currentConditions: CurrentConditions;
    description: string;
    days: DayType[];
}

export interface CurrentConditions {
    temp?: number | null;
    conditions?: string | null;
    feelslike?: number | null;
    humidity: number | null;
    visibility: number | null;
    windspeed: number | null;
    icon?: string | null;
    datetime?: string | null;
    sunrise?: string | null;
    sunset?: string | null;
}

export interface DayType {
    temp: number;
    tempmin: number;
    tempmax: number;
    datetime: string;
    conditions: string;
    icon: string;
}