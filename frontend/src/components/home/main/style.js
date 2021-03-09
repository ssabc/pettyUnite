import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    .bloard-wrap {
        flex: 1;
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
        .sub-hd {
            text-align: center;
            .date-1 {
                color: #262D2B;
                font-weight: bold;
                font-size: 18px;
            }
            .date-2 {
                color: #262D2B;
                margin-left: 10px;
            }
        }
    }
    .bt {
        text-align:center;
        padding: 40px 0;
    }
    .add-icon {
        display: inline-block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        box-shadow: 0 0 10px 0 #85CFCD;
        text-align: center;
        line-height: 100px;
        cursor: pointer;
        &:hover {
            box-shadow: 0 0 6px 0 #85CFCD;
        }
        .iconfont {
            color: #85CFCD;
            font-size: 70px;
        }
    }
`