export interface Weather {
    resolvedAddress: string;
    currentConditions: CurrentConditions;
    description: string;
    days: DayType[];
}

export interface CurrentConditions {
    temp: number;
    conditions: string;
    feelslike: number;
    humidity: number;
    visibility: number;
    windspeed: number;
    icon: string;
    datetime: string;
    sunrise: string;
    sunset: string
}

export interface DayType {
    temp: number;
    tempmin: number;
    tempmax: number;
    datetime: string;
    conditions: string;
    icon: string;
}