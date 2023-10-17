import styled from "styled-components";

const Wrapper = styled.main`

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
        max-width: 130px;
        border-radius: 4px;
    }

    .title{
        font-size: 18px;
    }

    .text{
        font-size: 14px;
        margin-top: 0;
        color: white;
        margin-bottom: 0;
    }

    .ep-title{
        font-size: 14px;
        color: #60B0F4;
        font-weight: bold;
    }

    .box-text-green{
        font-size: 12px;
        background-color: #2ECC71;
        padding: 2px 4px;
        border-radius: 4px;
        width: 32px;
        margin-top: 12px;
        text-align: center;
    }
    
    .box-text-red{
        font-size: 12px;
        background-color: #CB4335;
        padding: 2px 4px;
        border-radius: 4px;
        width: 33px;
        margin-top: 12px;
        text-align: center;
    }
    
    .clock-text{
        font-size: 14px;
        color: #60B0F4;
        float: left;
    }


    /* Trending */
    .trending-card{
        background-color: #151B21;
        border-radius: 8px;
        padding: 20px;
        height: 500px;
        overflow-y: auto;
        margin-bottom: 8px;
    }

    .trending-card img{
        max-width: 110px;
        border-radius: 4px;
    }

    .small-ratings{
        letter-spacing: 1px;
        color: #60B0F4;
        margin-bottom: 8px;
    }

    .rating-text{
        margin-left: 8px;
    }

    .views{
        opacity: 0.7;
    }

    .watch-btn{
        border: 2px solid #60B0F4;
        color: #60B0F4;
    }
        .watch-btn:hover{
            color: #17202A;
            background: #60B0F4;
        }

    /* Scroll Bar */
    ::-webkit-scrollbar {
    width: 5px;
    background-color: #151B21;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #60B0F4;
    }

    @media (max-width: 1199px) {
        .small-ratings{
            font-size: 14px;
            letter-spacing: 1px;
            color: #60B0F4;
        }

        .views{
            margin-bottom: 2px;
        }

        .rating-text{
            display: none;
        }

        .trending-card .title{
            margin-bottom: 2px;
        }
    }

    @media (max-width: 991px) {
        .small-ratings{
            font-size: 14px;
            letter-spacing: 1px;
            color: #60B0F4;
        }

        .views{
            font-size: 14px;
            margin-bottom: 0;
        }

        .rating-text{
            display: none;
        }

        .trending-card .title{
            font-size: 16px;
            margin-bottom: 0;
        }
    }
    @media (max-width: 767px) {
        .small-ratings{
            font-size: 18px;
            letter-spacing: 1px;
            color: #60B0F4;
        }

        .views{
            font-size: 18px;
            margin-bottom: 8px;
        }

        .rating-text{
            display: block;
        }

        .trending-card .title{
            font-size: 16px;
            margin-bottom: 8px;
        }
    }

    @media (max-width: 468px) {
        .small-ratings{
            font-size: 14px;
            letter-spacing: 1px;
            color: #60B0F4;
        }

        .views{
            font-size: 14px;
        }

        .rating-text{
            display: none;
        }
    }
`

export default Wrapper