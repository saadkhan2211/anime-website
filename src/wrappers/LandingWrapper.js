import styled from "styled-components";

const Wrapper = styled.main`

    .landing-img{
        width: 300px;
    }
    .landing-img-1{
        width: 280px;
        transform: scaleX(-1);
    }

    .nav-logo{
        width: 250px;
        margin-bottom: 20px;
    }

    .form-control{
        background: transparent;
        border: 2px solid #60B0F4;
        border-radius: 20px;
        padding: 8px 18px;
        color: white;
    }
        .form-control::placeholder{
            color: white;
        }

    .list-head-bg{
        background-color: #151B21;
        padding: 10px 20px;
        border-radius: 8px;
    }

`

export default Wrapper;