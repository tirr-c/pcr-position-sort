import styled, { css } from 'astroturf';
import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

interface Props {
    id: string;
}

const DragDiv = styled('div')`
    flex: 1 0 auto;
    width: 96px;
    height: 96px;
    margin: 4px;
    line-height: 0;
`;

const DragImg = styled<'img', { dragging?: boolean }>('img')`
    pointer-events: none;
    width: 100%;
    height: 100%;

    &.dragging {
        opacity: 0.5;
    }
`;

function Unit(props: Props) {
    const { id } = props;

    const iconId = String(Number(id) + 10);
    const src = `https://ames-static.tirr.dev/icons/unit/${iconId}.png`;
    return (
        <DragDiv>
            <DragImg src={src} />
        </DragDiv>
    );
}

export default SortableElement(Unit);
