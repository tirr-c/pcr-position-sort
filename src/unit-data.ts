import rawUnitData from './units.json';

function random(maxExclusive: number): number {
    const limit = (65536 / maxExclusive | 0) * maxExclusive;
    let base;
    do {
        base = Math.random() * 65536 | 0;
    } while (base >= limit);
    return base % maxExclusive;
}

function shuffle<T>(list: T[]): T[] {
    return sample(list, list.length);
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
const sampleParties = [
    ['100601', '100701', '102201', '103101', '104401'], // 악마왕국군
    ['102101', '102301', '102501', '102801'], // 사렌디아 구호원
    ['102601', '103301', '103801', '105201'], // 목장
    ['103201', '103401', '104601', '104801'], // 메르쿠리우스 재단
    // 아래는 너무 짧아서 제외
    // ['105801', '105901', '106001'], // 미식전
    // ['100101', '100201', '100301'], // 트윙클 위시
    // ['100401', '102001', '103601'], // 리틀 리리컬
    // ['101201', '101501', '104001'], // 포레스티에
    // ['101601', '101801', '105001'], // 루센트 학원
];

export function sampleUnits(n: number): string[] {
    return sample(rawUnitData, n).map(({ id }) => id);
}

export function getRandomExample(): string[] {
    const idx = random(sampleParties.length);
    return shuffle(sampleParties[idx]);
}
