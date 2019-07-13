import styled from 'astroturf';
import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import Unit from './Unit';

interface Props {
    className?: string;
    units: string[];
}

const HorizontalScroll = styled('div')`
    user-select: none;
    display: inline-block;
    overflow: auto;
    max-width: 80%;
`;

const FlexDiv = styled('div')`
    display: flex;
`;

function Board(props: Props) {
    const { className, units } = props;
    return (
        <HorizontalScroll className={className}>
            <FlexDiv style={{ width: `${104 * units.length}px` }}>
                {units.map((unitId, idx) => <Unit key={unitId} id={unitId} index={idx} />)}
            </FlexDiv>
        </HorizontalScroll>
    );
}

export default SortableContainer(Board);
