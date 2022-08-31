import { Coords } from "google-map-react";

export type TypeFrom = {
    locatition: Coords,
    description: string
}

export type TypeInitialState = {
    from: TypeFrom,
    to: TypeFrom,
    travelTime: number,
    selectedOption: string
}