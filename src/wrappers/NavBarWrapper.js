import styled from "styled-components";

const Wrapper = styled.main`

    background: #17202A;

    .navbar{
        position: relative;
        padding: 20px 0;
    }

    .navbar-brand{
        position: absolute;
        left: 48%;
        margin-left: -50px !important;
        display: block;
    }

    .nav-logo{
        transition: .5s;
        width: 165px;
    }

    .nav-btn{
        border: 2px solid #60B0F4;
        color: #60B0F4;
    }
        .nav-btn:hover{
            color: #17202A;
            background: #60B0F4;
        }

    .form-control{
        background: #99C8F0;
        border: none;
        color: #17202A;
    }
        .form-control::placeholder{
            color: #17202A;
        }
`

export default Wrapper