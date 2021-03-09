import styled from 'styled-components';

export default styled.div`
    .members-ul {
   display: flex;
   flex-wrap: wrap;
   /* justify-content: space-between; */
   margin-top: 20px;
}
.team-member-wrap .members-ul {
   margin-left: -20px;
}
.members-li {
   display: flex;
   flex-direction: column;
   padding: 5px 5px 10px 5px;
   img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: 0 0 4px 0 #000;
  }
  .name-span {
    text-align: center;
    font-size: 14px;
  }
}
.desc-wrap .section-title{
   font-weight: bold;
   font-size: 20px;
   line-height: 40px;
}
`