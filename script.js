/* RESET */
* { margin: 0; padding: 0; box-sizing: border-box; }

body{
  font-family: Arial, sans-serif;
  background: #ffffff;             /* ✅ white background */
  min-height: 100vh;
  overflow: hidden;
}

.container{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Center content */
.text{
  position: relative;
  z-index: 10;
  text-align: center;
}

/* Envelope */
.wrapper{
  position: relative;
  width: 300px;
  height: 200px;
  margin: 0 auto;
}

.envelope{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f3a7b5;
  border-radius: 6px;
  z-index: 2;
}

/* The two lids (triangle flaps) */
.lid{
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f19aaa;
  transform-origin: top;
  transition: 0.5s;
  z-index: 3;
}

.lid.one{
  clip-path: polygon(0 0, 100% 0, 50% 50%);
}

.lid.two{
  clip-path: polygon(0 0, 100% 0, 50% 60%);
  transform: rotateX(180deg);
  z-index: 1;
}

.wrapper.open .lid.one{
  transform: rotateX(180deg);
}

.wrapper.open .lid.two{
  transform: rotateX(0deg);
}

/* Letter card */
.letter{
  position: absolute;
  top: 20px;
  left: 15px;
  width: 270px;
  height: 160px;
  background: #ffffff;
  border-radius: 10px;
  padding: 14px;
  z-index: 4;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

/* Slides */
.slide{ display: none; }
.slide.active{ display: block; }

/* Slide text */
.slide-title{
  font-size: 18px;
  color: #222;
  line-height: 1.2;
  margin-top: 10px;
}

.slide-sub{
  color: #333;
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.25;
}

/* Buttons Open/Close */
.buttons{
  margin-top: 14px;
}

.buttons button{
  background: #ff5a8a;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px 16px;
  cursor: pointer;
  transition: transform .12s ease;
}

.buttons button:hover{
  transform: translateY(-1px);
}

/* Slide 2 Teddy + question */
.teddy-wrap{
  margin-top: 4px;
}

.teddy{
  font-size: 44px;
  line-height: 1;
}

.hearts{
  font-size: 14px;
  margin-top: 2px;
}

.question{
  margin-top: 8px;
  font-size: 16px;
  color: #222;
}

/* Answer buttons area */
.answer-buttons{
  margin-top: 10px;
  position: relative;
  height: 52px;        /* ✅ defines dodge area */
}

/* BIG green YES like screenshot */
.big-yes{
  background: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 12px 28px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 6px 0 rgba(0,0,0,0.08);
}

/* Small NO */
.small-no{
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
}

/* Hover message under buttons */
.no-msg{
  margin-top: 8px;
  font-size: 12px;
  color: #666;
  min-height: 16px;  /* keeps layout stable */
}
