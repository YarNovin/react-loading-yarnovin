import React from 'react';
import styled from 'styled-components';
import { YarnovinLoadingProps } from '../types/types';

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
`;

const YarnovinLoading: React.FC<YarnovinLoadingProps> = (Props) => {
    return (
        <>
            <Container>
                
                <img src="" alt="yarnovin_logo" />
            </Container>
        </>
    );
}

export default YarnovinLoading;