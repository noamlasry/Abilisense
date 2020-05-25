import styled from 'styled-components';

 const Canvas = styled.div`
 width: 10px;
 height: 0px;
 background: black;
 position: relative;
  animation: mymove 25s infinite;
  animation-timing-function: linear;
 
  @keyframes mymove {
    from {left: 0px;}
    to {left: 700px;}
  }
`
export default Canvas;