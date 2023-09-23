import imageOne from "../assets/images/blog-one.jpg";
import imageTwo from "../assets/images/blog-two.jpg";
import imageThree from "../assets/images/blog-three.jpg";

import Anna from "../assets/images/Anna.jpg";
import Emma from "../assets/images/Emma.jpg";
import Alex from "../assets/images/Alex.jpg";

const currentTime = new Date();

let dayInfo = currentTime.getDate();
let monthInfo = String(currentTime.getMonth()).padStart(2, "0");
let yearInfo = currentTime.getFullYear();

const screenTime = `${dayInfo}.${monthInfo}.${yearInfo}`;

let day = 17;
let month = 6;
let year = 2023;

let formattedDay = String(day).padStart(2, "0");
let formattedMonth = String(month + 1).padStart(2, "0");
let formattedYear = String(year);

let formattedDate = `${formattedDay}.${formattedMonth}.${formattedYear}`;

let secondDay = 14;
let secondMonth = 2;
let secondYear = 2023;

let format = String(secondDay).padStart(2, "0");
let formattedSecondDate= String(secondMonth + 1).padStart(2, "0");
 let secondFormattedYear= String(secondYear);


let secondFormatted = `${format}.${formattedSecondDate}.${secondFormattedYear}`
export const blogInfo = [
  {
    id: 1,
    title: "In mauris eros, placerat.",
    content:
      "Curabitur finibus condimentum purus sit amet posuere. Vivamus aliquam eleifend ultrices. Ut magna dui, suscipit a efficitur eget, sagittis nec diam. Donec non felis feugiat.",
    image: imageOne,
    author: "Emma Williams",
    aImg: Emma,
    time: screenTime,
  },
  {
    id: 2,
    title: "Pellentesque malesuada commodo odio et.",
    content:
      "Proin fringilla augue sem. Mauris felis massa, molestie eu facilisis ac, ornare sit amet sem. Integer et pellentesque risus, non tempor ex.",
    image: imageTwo,
    author: "Anna Davis",
    aImg: Anna,
    time: formattedDate,
  },
  {
    id: 3,
    title: "Vivamus sed pharetra ligula.",
    content:
      "Nam pulvinar tempus dolor vitae convallis. Morbi eget porta leo. Etiam a elementum lorem. Vestibulum placerat purus elit, et imperdiet lorem mattis ac. In hac habitasse platea.",
    image: imageThree,
    author: "Alex Brown",
    aImg: Alex,
    time: secondFormatted,
  },
];
