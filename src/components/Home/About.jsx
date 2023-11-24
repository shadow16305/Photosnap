import { homeImages } from "../../tools/items-database";
import HomeLayout from "../UI/HomeLayout";

const content = [
  {
    id: "b1",
    title: "Create and share your photo stories.",
    paragraph:
      "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    btn: "get an invite",
    img: homeImages[0],
  },
  {
    id: "b2",
    title: "Beautiful stories every time",
    paragraph:
      "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    btn: "view the stories",
    img: homeImages[1],
  },
  {
    id: "b3",
    title: "designed for everyone",
    paragraph:
      "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
    btn: "get an invite",
    img: homeImages[2],
  },
];

const About = () => {
  return content.map((item) => (
    <HomeLayout
      id={item.id}
      key={item.id}
      title={item.title}
      text={item.paragraph}
      link={item.btn}
      imgDesktop={item.img}
      imgTablet={item.img}
    />
  ));
};

export default About;
