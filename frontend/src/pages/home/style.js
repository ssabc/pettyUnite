import styled from 'styled-components';

export default styled.div`
    color: #707070;
    padding: 40px 30px;
 .main-layout {
     display: flex;
     min-height: calc(100vh - 140px);
     & > div {
        box-shadow: 0 2px 4px 0 #999;
        border-radius: 3px;
        padding: 10px;
        margin-right: 20px;
        &:last-child {
            margin-right: 0;
        }
     }
 }
 .main-layout .lf {
     flex: 1;
 }
 .main-layout .md {
     flex: 2;
 }
 .main-layout .rg {
     flex: 1;
 }
`