//your JS code here. If required.
/*  your css code here. If applicable */

* {
    box-sizing: border-box;
  }
  
  body{
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
	  width: 100%
    overflow: hidden;
    margin: 0;
  }
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100%;
  }
  .square{
    background-color: #1d1d1d;
    box-shadow: 0 0 2px #000;
    height: 16px;
    width: 16px;
    margin: 2px;
    transition: 5s ease;
  }
  
  .square:hover{
    transition-duration: 1s;
	  background-color: red;
  }
