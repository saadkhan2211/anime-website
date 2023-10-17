import styled from "styled-components";

const Wrapper = styled.main`

    .list-head-bg{
        background-color: #151B21;
        padding: 10px 20px;
        border-radius: 8px;
    }

    .link{
        text-decoration: none;
        color: #60B0F4;
    }

    .card-body{
        position: relative;
        transition: .5s;
    }
        .card-body:hover{
            transition: .5s;
            transform: scale(1.05);
        }

    .card-box{
        background-color: #60B0F4;
        color: #17202A;
        text-align: center;
        font-size: 14px;
        padding: 5px;
        height: 30px;
        border-radius: 0 8px 0 8px;
        position: absolute;
        bottom: 16.8%;
        left: 0%;
    }

`

export default Wrapper;