import React from 'react';
import styled from 'styled-components';
import '../assets/css/style.css';

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
`;

/**
 * # Animations 
 * - OpacityLogo 
 * - CircleBarLogo
 */
const LoadingDATA = {
  'CircleBarLogo': {
    // src: require('../assets/images/yarnovin_CircleBarlogo.gif'),
    className: 'CircleBarLogo'
  },
  'OpacityLogo': {
    src: require('../assets/images/yarnovin_logo.png'),
    className: 'OpacityLogo'
  }
}
class YarnovinLoading extends React.PureComponent {
  render() {
    return (
      <>
        <Container>
          <img src={LoadingDATA[this.props.mode]} alt="yarnovin__logo" />
        </Container>
      </>
    );
  }
}


export default YarnovinLoading;