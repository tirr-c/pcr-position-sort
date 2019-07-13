import styled, { css } from 'astroturf';
import React from 'react';
import { arrayMove } from 'react-sortable-hoc';

import Board from './Board';
import { getRandomExample, sampleUnits, unitData } from './unit-data';

const BodyWrapper = styled('div')`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
        flex: 0;
    }
`;

const Spacer = styled('div')`
    flex: 1;
`;

const BoardWrapper = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 96px;

    > * + * {
        margin-left: 8px;
    }
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
        <BodyWrapper>
            <h2>Party Sorted</h2>
            <p>
                드래그해서 캐릭터들을 위치 순서대로 나열해 보세요.
            </p>
            <BoardWrapper>
                <span>뒤</span>
                <Board className={styles.board} units={units} axis="x" onSortEnd={handleSortEnd} />
                <span>앞</span>
            </BoardWrapper>
            <Spacer />
            <div>
                <a href="https://github.com/tirr-c/pcr-position-sort">소스 코드 보기</a>
            </div>
        </BodyWrapper>
    );
}

export default App;
