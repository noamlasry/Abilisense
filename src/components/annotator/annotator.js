import React from 'react';
import styled from 'styled-components';

import FileInput from './FileInput';
import Waveform from './Waveform';
import { getAudioBuffer, getContext } from './utils';
import { color } from '../../styles/theme';

const Columns = styled.div` 
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Heading = styled.div`
  font-weight: 600;
  padding-right: 20px;
`;

const InputGroup = styled.div`
  align-items: center;
  display: flex;
  margin: 10px 0;
`;

const WaveformWrapper = styled.div`
  height: 300px;
  width: 100%;
`;

const Wrapper = styled.div`
  background: linear-gradient(
    to bottom,
    ${p => p.theme.color.background},
    ${p => p.theme.color.backgroundSecondary}
  );
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0.8em;
`;

class Annotator extends React.PureComponent {
  state = {
    buffer: null,
    context: null,
    height: 150,
    markerStyle: {
      color: color.tertiary,
      width: 4
    },
    position: 0,
    responsive: true,
    showPosition: true,
    waveStyle: {
      animate: true,
      color: color.primary,
      plot: 'bar',
      pointWidth: 1
    },
    width: 900
  };

  componentWillMount() {
    const context = getContext();
    this.setState({
      context
    });
  }

  getFile = async (path = 'audio/test.mp3') => {
    const buffer = await getAudioBuffer(path, this.state.context);
    this.setState({ buffer });
  };

  handleFile = event => {
    const files = event.target.files;
    const file = window.URL.createObjectURL(files[0]);
    this.getFile(file);
  };

  setValue = (val, prop, sub) => {
    if (sub) {
      this.setState(state => ({
        ...state,
        [sub]: {
          ...state[sub],
          [prop]: val
        }
      }));
    } else {
      this.setState({ [prop]: val });
    }
  };

  start = () => {
    this.setState({
      run: true
    });
  };

  stop = () => {
    this.setState({
      run: false
    });
  };

  render() {
    return (
      <div>
        <FileInput accept="audio/*" onChange={this.handleFile} />
        <WaveformWrapper>
          <Waveform
            buffer={this.state.buffer}
            height={this.state.height}
            markerStyle={this.state.markerStyle}
            onPositionChange={pos => this.setValue(pos, 'position')}
            position={this.state.position}
            responsive={this.state.responsive}
            showPosition={this.state.showPosition}
            waveStyle={this.state.waveStyle}
            width={this.state.width}
          />
        </WaveformWrapper>
      </div>
    );
  }
}

export default Annotator;
