import styled from 'astroturf';
import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import Unit from './Unit';

interface Props {
    units: string[];
}

const HorizontalScroll = styled('div')`
    user-select: none;
    overflow: auto;
    width: 80%;
    margin: 0 auto;
`;

const FlexDiv = styled('div')`
    display: flex;
`;

function Board(props: Props) {
    const { units } = props;
    return (
        <HorizontalScroll>
            <FlexDiv style={{ width: `${104 * units.length}px` }}>
                {units.map((unitId, idx) => <Unit key={unitId} id={unitId} index={idx} />)}
            </FlexDiv>
        </HorizontalScroll>
    );
}

export default SortableContainer(Board);
