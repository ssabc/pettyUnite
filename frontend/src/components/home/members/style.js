import styled from 'styled-components';

export default styled.div`
.members-li {
   display: flex;
   align-items: center;
   padding: 5px;
   border-bottom: 1px solid #efefef;
   img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  .name-span {
    text-align: center;
    font-size: 14px;
    margin-left: 8px;
  }
}
`