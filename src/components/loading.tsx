import React from 'react';
import styled from 'styled-components';
import '../assets/css/style.css';
import { YarnovinLoadingProps } from '../types/types';

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
`;

const LoadingData = {
    'OffsetChar': {
        // gif 
        src: require('../assets/OffsetChar.gif'),
        className: 'OffsetChar',
        width: 512,
        height: 512
    },
    'OpacityLogo': {
        // image
        src: require('../assets/images/yarnovin_logo.png'),
        className: 'OpacityLogo',
        width: 200,
        height: 200
    },
    'CircleBarLogo': {
        // gif 
        src: require('../assets/CircleBarLogo.gif'),
        className: 'CircleBarLogo',
        width: 400,
        height: 450
    }
}

const YarnovinLoading: React.FC<YarnovinLoadingProps> = (Props) => {
    const find_mode = LoadingData[Props.mode];

    return (
        <>
            <Container>
                <img src={find_mode.src} className={find_mode.className}
                    height={find_mode.height}
                    width={find_mode.width}
                    alt="yarnovin__loading" />
            </Container>
        </>
    );
}

export default YarnovinLoading;