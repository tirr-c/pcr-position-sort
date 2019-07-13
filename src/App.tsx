import styled, { css } from 'astroturf';
import React from 'react';
import { arrayMove } from 'react-sortable-hoc';

import Board from './Board';
import { sampleUnits, unitData } from './unit-data';

const BoardWrapper = styled('div')`
    display: flex;
    justify-content: center;
`;

const styles = css`
    .board {
        max-width: 80%;
    }
`;

function App() {
    const [units, setUnits] = React.useState(() => sampleUnits(5));
    const handleSortEnd = React.useCallback(({ oldIndex, newIndex }) => setUnits(units => arrayMove(units, oldIndex, newIndex)), []);
    return (
        <BoardWrapper>
            <Board className={styles.board} units={units} axis="x" onSortEnd={handleSortEnd} />
        </BoardWrapper>
    );
}

export default App;
