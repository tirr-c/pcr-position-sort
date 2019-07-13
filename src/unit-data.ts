import rawUnitData from './units.json';

function random(maxExclusive: number): number {
    const limit = (65536 / maxExclusive | 0) * maxExclusive;
    let base;
    do {
        base = Math.random() * 65536 | 0;
    } while (base >= limit);
    return base % maxExclusive;
}

function sample<T>(list: T[], n: number): T[] {
    const shuffleList = [...list];
    const len = list.length;
    for (let i = 0; i < n; i++) {
        const p = random(len - i);
        if (i !== p) {
            const temp = shuffleList[i];
            shuffleList[i] = shuffleList[p];
            shuffleList[p] = temp;
        }
    }
    return shuffleList.slice(0, n);
}

export interface Unit {
    id: string;
    name: string;
    pos: number;
}

export const unitData: Map<string, Unit> = new Map(rawUnitData.map(unit => [unit.id, unit]));

export function sampleUnits(n: number): string[] {
    return sample(rawUnitData, n).map(({ id }) => id);
}
