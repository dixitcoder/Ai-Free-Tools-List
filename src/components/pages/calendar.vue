<template>
<body style="background-color: #031525;">
    <div  class="m-box" style="background-color: #031525;">
      <h2 style="color:white">Dixit - Coder</h2>
     <div   class="im" style="background-image: url('https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg');">
        <h1>D</h1>

    </div>
     <div class="im" style="background-image: url('https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg');">
        <h1>I</h1>

    </div>
     <div class="im" style="background-image: url('https://i.pinimg.com/originals/8a/58/da/8a58da46777660f46473ba5f4a3d9ae5.jpg');">
        <h1>X</h1>

    </div>
     <div class="im" style="background-image: url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg');">
        <h1>I</h1>

    </div>
     <div class="im" style="background-image: url('https://www.hdwallpapers.in/download/ultra_nature_wallpaper_4k_hd-HD.jpg');">
        <h1>T</h1>

    </div>
    </div>
</body>
</template>


<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
}
.m-box{
    height: 70vh;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2%;
}
.im{
    height: 80%;
    width: 18%;
    max-width: 70%;
    border-radius: 50px;
    background-size: cover;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4%;
    color: transparent;
    opacity: 0.4;
    transition: all 0.4s linear;
    font-size: 1vw;
    padding-left: 5%;
    overflow: hidden;
    button{
       height: 10%;
       width: 40%;
       border:1px solid red;
       border-radius: 10px;
       background-color: transparent;
       color: white;
       font-weight: 900;

    }
}
.im:hover{
    width: 70%;
    height: 100%;
    opacity: 1;
    border-radius: 30px;
    color: white;

}
</style>
