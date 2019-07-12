import React from 'react';
import { arrayMove } from 'react-sortable-hoc';

import Board from './Board';

const IDS = [
    '100101', '100201', '100301', '100401', '100601', '100701',
    '100801', '100901', '101001', '101101', '101201', '101501',
    '101601', '101701', '101801', '102001', '102101', '102201',
    '102301', '102501', '102601', '102701', '102801', '102901',
    '103001', '103101', '103201', '103301', '103401', '103601',
    '103801', '104001', '104201', '104301', '104401', '104501',
    '104601', '104701', '104801', '104901', '105001', '105101',
    '105201', '105301', '105701', '105801', '105901', '106001',
    '106301',
];

function App() {
    const [units, setUnits] = React.useState(IDS);
    const handleSortEnd = React.useCallback(({ oldIndex, newIndex }) => setUnits(units => arrayMove(units, oldIndex, newIndex)), []);
    return (
        <Board units={units} axis="x" onSortEnd={handleSortEnd} />
    );
}

export default App;
