body {
    font-family: "Lato", sans-serif;
   /* background-image: url("https://media.giphy.com/media/pWhWtKdqwOAco/giphy.gif");*/
  }
  
  .sidenav {
    height: 100%;
    width: 300px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(20, 19, 19, 0.37);
    overflow-x: hidden;
    padding-top: 20px;
  }
  
  .bg-img {
    /* The image used */
    background-image: url("img/bg.jpg");
  
    min-height: 700px;
    min-width: 1509px;
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  
    /* Needed to position the navbar */
    position: relative;
  }
  .home
  {
    color: rgb(250, 248, 248);
    font-family: 'Montserrat';
   
     text-align:right;
     
  }
  
  .fa {
    padding: 20px;
    font-size: 30px;
    width: 50px;
    text-align: center;
    text-decoration: none;
  }
  
  /* Add a hover effect if you want */
  .fa:hover {
    color: rgb(146, 141, 141);
  }
  
 
  
 
  .fa {
    
    color: white;
  }

  /* Project Section*/
  #gallery {
    padding: 60px 0;
  }
  
  #gallery .container-fluid {
    margin-bottom: 3px;
  }
  
  #gallery .col-lg-6  {
    width: 100%;
    height: 100%;
    min-height: 300px;
  
  }
  #gallery .img-fluid {
    margin-top: 0px;
    vertical-align: auto;
    padding: 0 0px;
  }
  #gallery .col-lg-3
  {
    
      width: fit-content;
      display: inline-grid;
      flex-wrap: wrap;
      padding: 0 4px;
      
      grid-gap: 10px;
    
  }
  
  #gallery .gallery-info {
    background: url("img/Projects/proj6.jpg") top center no-repeat;
    background-size: cover;
    font-family: Alegreya Sans;
    position: relative;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  
  #gallery .gallery-info:before {
    content: "";
    background: rgba(12, 12, 12, 0.8);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
  
  #gallery .gallery-info h3 {
    font-size: 36px;
    font-weight: 700;
    color: #fff;
  }
  
  #gallery .gallery-info p {
    color: #fff;
    margin-bottom: 0;
  }
  
  #gallery .gallery-gallery-container {
    padding-right: 12px;
  }
  
  #gallery .gallery-gallery {
    overflow: hidden;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
  }
  
  #gallery .gallery-gallery img {
    transition: all ease-in-out 0.4s;
  }
  
  #gallery .gallery-gallery:hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  
  
  



  .list-group a {
    padding: 6px 8px 3px 8px;
    text-align: center;
    text-decoration: none;
   
    font-size: 25px;
    color: #818181;
    display: block;
  }

  .list-group a:hover {
    color: white;
    text-decoration-color: antiquewhite;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(109, 107, 107, 0.19);
  }
  
  .main {
    margin-left: 300px; 
  /* Same as the width of the sidenav */
    
    padding: 0px 10px;
    margin-top: 0%;
  }

  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
 
  #myBtn {
    display: none;
    position: fixed;
    top: 20px;
    right: 30px;
    z-index: 99;
    font-size: 15px;
    border: none;
    outline: none;
    background-color: rgb(20, 19, 19);
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
    font-family:'Montserrat' ;
  }
  #myBtn:hover {
    background-color: rgb(7, 6, 6);
    color: rgb(165, 164, 158);
  }
  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 400px;
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }
  
  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  /* Position the front and back side */
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  
  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }
  
  /* Style the back side */
  .flip-card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
    font-family: 'Montserrat';
  }
  .container {
    padding: 2px 16px;
    color: white;
    font-family: 'Montserrat';
  }

 
  .fh5co-about-me {
    position: relative;
    margin: 23px 0 23px; }
    @media (max-width: 250px) {
      .fh5co-about-me {
        margin: 150px 0; } }
    @media (max-width: 92px) {
      .fh5co-about-me {
        margin: 125px 0; } }

  .about-me-inner {
    display: flex;
    justify-content: space-between; }
    @media (max-width: 92px) {
      .about-me-inner {
        flex-direction: column;
        align-items: center; } }
  
  .about-me-slider {
    position: relative; }
    .about-me-slider .slick-arrow {
      position: absolute;
      bottom: -18%; }
    .about-me-slider .slick-prev {
      left: 40%; }
      @media (max-width: 520px) {
        .about-me-slider .slick-prev {
          left: 34%; } }
    .about-me-slider .slick-next {
      right: 40%; }
      @media (max-width: 520px) {
        .about-me-slider .slick-next {
          right: 34%; } }
  
  .span-arrow {
    padding: 10px 15px;
    cursor: pointer;
    color: #a7a4a2;
    border: 1px solid #a7a4a2;
    border-radius: 50%;
    transition: 0.3s ease; }
    .span-arrow:hover {
      color: #fff;
      border-color: #fff; }
  
  .portfolio-wrapper {
    width: 400px;
    height: 700 px;
    padding: 8px;
    text-align: center;
    font-family: 'Alegreya Sans';
    background-color: rgba(170, 162, 162, 0.664); }
    .portfolio-wrapper .portfolio__img {
      font-size: 0; }
      .portfolio-wrapper .portfolio__img img {
        width: 100%; }
    .portfolio-wrapper .portfolio__bottom {
      padding: 35px 0 5px;
      background-color: #ffffff; }
      @media (max-width: 992px) {
        .portfolio-wrapper .portfolio__bottom {
          padding: 25px 0; } }
    .portfolio-wrapper .portfolio__name {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 23px; }
      @media (max-width: 992px) {
        .portfolio-wrapper .portfolio__name {
          margin-bottom: 10px; } }
      .portfolio-wrapper .portfolio__name span {
        font-size: 90px;
        line-height: 75px;
        color: #79736e;
        font-family: 'Alegreya Sans' }
        @media (max-width: 992px) {
          .portfolio-wrapper .portfolio__name span {
            font-size: 65px;
            line-height: 62px;
            font-family: 'Alegreya Sans' 
            } }
    .portfolio-wrapper p {
      padding: 0 10%;
      line-height: 25px;
      font-style: italic;
      color: #777;
      font-family: 'Alegreya Sans'  }
      @media (max-width: 620px) {
        .portfolio-wrapper p {
          font-size: 15px;
          line-height: 20px; } }
    @media (max-width: 992px) {
      .portfolio-wrapper {
        margin-bottom: 20px; } }
    @media (max-width: 620px) {
      .portfolio-wrapper {
        width: 250px; } }
  
  .about-me__text {
    width: 44%;
    margin-right: 80px;
    text-align: center; }
    .about-me__text .universal-h2 {
      color: #fff;
      padding-bottom: 20px;
      margin-bottom: 25px;
      font-family: 'Montserrat';;
      font-size: 40px; }
    .about-me__text p {
      margin-bottom: 35px;
      line-height: 24px;
      color: #ffffff;
      font-family: 'Montserrat'; }
      .about-me__text p span {
        font-size: 48px;
        color: #fff; }
      @media (max-width: 620px) {
        .about-me__text p {
          margin-bottom: 20px;
          font-size: 14px;
          line-height: 19px; } }
    .about-me__text h4 {
      margin-bottom: 7px;
      font-size: 25px;
      font-family: 'Alegreya Sans';
      color: white; }
    
    @media (max-width: 1250px) {
      .about-me__text {
        width: 48%;
        margin-right: 40px; } }
    @media (max-width: 992px) {
      .about-me__text {
        width: 100%;
        margin-right: 0; } }
        
        .slick-slide:focus {
          outline: none; }  
