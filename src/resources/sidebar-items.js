import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineVideoCamera,
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlineEdit,
  AiTwotoneDatabase,
} from "react-icons/ai";

export default [
  {
    title: "Home",
    icon: <AiOutlineHome size={21} />,
    path: "home",
  },
  {
    title: "Search",
    icon: <AiOutlineSearch size={21} />,
    path: "search",
  },
  {
    title: "Explore",
    icon: <AiOutlineCompass size={21} />,
    path: "explore",
  },
  {
    title: "Reels",
    icon: <AiOutlineVideoCamera size={21} />,
    path: "reels",
  },
  {
    title: "Messages",
    icon: <AiOutlineMessage size={21} />,
    path: "messages",
  },
  {
    title: "Profile",
    icon: <AiOutlineUser size={21} />,
    path: "profile",
  },
  {
    title: "Edit",
    icon: <AiOutlineEdit size={21} />,
    path: "edit",
  },
  {
    title: "User Data",
    icon: <AiTwotoneDatabase size={21} />,
    path: "userdata",
  },
];
