import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    .bloard-wrap {
        flex: 1;
        box-shadow: 0 2px 4px 0 #999;
        border-radius: 10px;
        padding: 10px;
        margin-top: 40px;
        .hd {
            display: flex;
            justify-content: space-between;
            .title {
                font-weight: bold;
                font-size: 18px;
                flex: 1;
                text-align: center;
                margin-right: -138px;
                padding: 4px 0;
            }
        }
    }
`