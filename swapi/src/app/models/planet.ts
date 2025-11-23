export interface PlanetResult{
    count: number;
    next: string;
    previous : string;
    results: Planet[];
}

export interface Planet {
    name: string;
    rotationPeriod: number;
    orbitalPeriod: number;
    diameter: number;
    climate: string;
    gravity: string;
    terrain: string;
    surfaceWater: number;
    population: number;
}