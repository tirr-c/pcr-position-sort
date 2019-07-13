import rawUnitData from './units.json';

export interface Unit {
    id: string;
    name: string;
    pos: number;
}

export const unitData: Map<string, Unit> = new Map(rawUnitData.map(unit => [unit.id, unit]));
