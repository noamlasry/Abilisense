import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;


const FileInput = ({ accept = '*', onChange }) => {
  return (
    <button>
      <Input
        accept={accept}
        type="file"
        name="file"
        id="file"
        onChange={onChange}
      />
      <label htmlFor="file">Open File</label>
    </button>
  );
};

FileInput.propTypes = {
  accept: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default FileInput;
