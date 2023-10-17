import styled from "styled-components";

const Wrapper = styled.main`
    .card{
        background: none;
        margin-top: 50px;
        border: none;
        max-width: 60%;
    }

    .card img{
        max-width: 200px;
        margin-bottom: 8px;
    }

    .card-body{
        border: 2px solid #60B0F4;
        border-radius: 8px;
    }

    .title{
        text-align: center;
        margin-top: 8px;
        color: white;
    }

    form{
        max-width: 90%;
        margin: auto;
    }
    
    .form-control{
        background: none;
        padding: 6px 14px;
        color: white;
        border-color: #60B0F4;
        border-radius: 16px;
    }
        .form-control::placeholder{
            color: white;
        }

    .eye-btn{
        color: white;
        background: none;
        border: 1px solid #60B0F4;
        border-radius: 14px;
        border-left: none;
    }

    .register-btn{
        color: #60B0F4;
        font-weight: 600;
        text-decoration: none;
        margin-left: 4px;
    }

    .login-btn{
        border: 2px solid #60B0F4;
        max-width: 100px;
        color: white;
        text-align: center;
    }
        .login-btn:hover{
            color: #17202A;
            background: #60B0F4;
        }

    .login-btn-1{
        font-size: 24px;
        margin: 0 8px;
        color: white;
        transition: .5s;
    }
        .login-btn-1:hover{
            transform: scale(1.3);
            transition: .5s;
            color: #60B0F4;
    }
`

export default Wrapper