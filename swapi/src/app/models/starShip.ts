export interface StarShipResponce {
    count: number;
    next: string;
    previous: string;
    results: StarShip[];
}

export interface StarShip {
   name: string;
   model: string;
   manufacturer: string;
   costInCredits: number;
   length: number;
   maxAtmospheringSpeed: number;
   crew: string;
   passengers: number;
   cargoCapacity: number;
   consumables: string;
   hyperdriveRating: number;
   mGLT: number;
   starshipClass: string;   
}