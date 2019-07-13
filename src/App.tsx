import React from 'react';
import { arrayMove } from 'react-sortable-hoc';

import Board from './Board';
import { unitData } from './unit-data';

function App() {
    const [units, setUnits] = React.useState([...unitData.keys()]);
    const handleSortEnd = React.useCallback(({ oldIndex, newIndex }) => setUnits(units => arrayMove(units, oldIndex, newIndex)), []);
    return (
        <Board units={units} axis="x" onSortEnd={handleSortEnd} />
    );
}

export default App;
