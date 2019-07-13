import styled, { css } from 'astroturf';
import React from 'react';
import { arrayMove } from 'react-sortable-hoc';

import Board from './Board';
import { getRandomExample, sampleUnits, unitData } from './unit-data';

const BoardWrapper = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const styles = css`
    .board {
        max-width: 80%;
    }
`;

function App() {
    const [units, setUnits] = React.useState(getRandomExample);
    const handleSortEnd = React.useCallback(({ oldIndex, newIndex }) => setUnits(units => arrayMove(units, oldIndex, newIndex)), []);
    return (
        <BoardWrapper>
            <span>뒤</span>
            <Board className={styles.board} units={units} axis="x" onSortEnd={handleSortEnd} />
            <span>앞</span>
        </BoardWrapper>
    );
}

export default App;
