import styled from "styled-components";

const Wrapper = styled.main`

    .bg-img{
        width: 100%;
        max-height: 750px;
        object-fit: cover;
    }

    .img-overlay{
        background: rgba(0, 0, 0, 0.6);
        width: 100%;
        position: absolute;
        top: 0;
    }

    .list-card{
        background-color: #151B21;
        border-radius: 8px;
        padding: 20px;
        height: 500px;
        overflow-y: auto;
        margin-bottom: 8px;
    }

    .card-head{
        background-color: #151B21;
        padding: 10px 20px;
        border-radius: 8px;
    }

    .card{
        border: none;
        flex-direction: row;
        margin-bottom: 8px;
        background: none;
        color: white;
    }

    .card img{
        max-width: 15%;
        border-radius: 4px;
    }

    .text{
        font-size: 14px;
        margin-top: 0;
        color: white;
        margin-bottom: 0;
    }

    .text-blue{
        font-size: 14px;
        color: #60B0F4;
        font-weight: bold;
    }

    .sub{
        font-size: 12px;
        background-color: #2ECC71;
        padding: 2px 4px;
        border-radius: 4px;
        width: 32px;
        margin: 12px 6px 0 0;
        text-align: center;
    }
    
    .dub{
        font-size: 12px;
        background-color: #CB4335;
        padding: 2px 4px;
        border-radius: 4px;
        width: 33px;
        margin: 12px 0 0 6px;
        text-align: center;
    }

    .small-ratings{
        letter-spacing: 1px;
        color: #60B0F4;
        margin-bottom: 8px;
    }

    .rating-text{
        margin-left: 8px;
    }

`

export default Wrapper