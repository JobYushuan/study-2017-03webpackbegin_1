import "../styles/image_viewer.css";

import big from "../assets/big.jpg";
import small from "../assets/small.jpg";


const image1 = document.createElement('img');
image1.src = "http://lorempixel.com/400/400";
document.body.appendChild(image1);


const image2 = document.createElement('img');
image2.src = small ;
document.body.appendChild(image2);

const image3 = document.createElement('img');
image3.src = big ;
document.body.appendChild(image3);