import {
  MdOutlineSlowMotionVideo,
  MdOutlineVideoLibrary,
  MdHomeFilled,
} from "react-icons/md";
import { CgMusicNote } from "react-icons/cg"; //music
import { SiYoutubegaming } from "react-icons/si"; //gaming
import { CiTrophy } from "react-icons/ci"; //trophy
import { GoLightBulb } from "react-icons/go"; //bubble
import { MdVideoLibrary } from "react-icons/md"; //library
import { VscHistory } from "react-icons/vsc"; //history
import { SlClock } from "react-icons/sl"; //watch later
import { BiLike } from "react-icons/bi"; //liked
import { BsFire } from "react-icons/bs"; //Trending

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinedFlag } from "react-icons/md"; //flag 2
import { BsQuestionCircle } from "react-icons/bs"; //help
import { AiOutlineFileExclamation } from "react-icons/ai"; //feedback
import { ReactComponent as YoutubePremiumSVG } from "../../assets/images/premium.svg";
import { ReactComponent as YouTubeMusic } from "../../assets/images/music.svg";
import { ReactComponent as YouTubeKids } from "../../assets/images/kids.svg";

const SideText = [
  {
    id: 1,
    section: "Home",
    options: [
      { id: 1, icon: <MdHomeFilled />, text: "Home" },
      {
        id: 2,
        icon: <MdOutlineSlowMotionVideo />,
        text: "Shorts",
      },
      {
        id: 3,
        icon: <MdOutlineVideoLibrary />,
        text: "Subscriptions",
      },
    ],
  },
  {
    id: 2,
    section: "Library",
    options: [
      { id: 4, icon: <MdVideoLibrary />, text: "Library" },
      { id: 5, icon: <VscHistory />, text: "History" },
      {
        id: 6,
        icon: <SlClock />,
        text: "Watch later",
      },
      {
        id: 7,
        icon: <BiLike />,
        text: "Liked videos",
      },
    ],
  },
  {
    id: 3,
    section: "Explore",
    options: [
      { id: 8, icon: <BsFire />, text: "Trending" },
      { id: 9, icon: <CgMusicNote />, text: "Music" },
      { id: 10, icon: <SiYoutubegaming />, text: "Gaming" },
      { id: 11, icon: <CiTrophy />, text: "Sports" },
      { id: 12, icon: <GoLightBulb />, text: "Learning" },
    ],
  },
  {
    id: 4,
    section: "More",
    options: [
      {
        id: 13,
        icon: <YoutubePremiumSVG />,
        text: "YouTube Premium",
      },
      { id: 14, icon: <YouTubeMusic />, text: "YouTube Music" },
      { id: 15, icon: <YouTubeKids />, text: "YouTube Kids" },
    ],
  },
  {
    id: 5,
    section: "Settings",
    options: [
      { id: 16, icon: <IoSettingsOutline />, text: "Settings" },
      {
        id: 17,
        icon: <MdOutlinedFlag />,
        text: "Report history",
      },
      { id: 18, icon: <BsQuestionCircle />, text: "Help" },
      { id: 19, icon: <AiOutlineFileExclamation />, text: "Send feedback" },
    ],
  },
  // Add more sections with their respective options
];

export default SideText;
