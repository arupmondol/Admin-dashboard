import{
  UilEstate,
  UilChart,
  UilClipboardAlt,
  UilPackage,
  UilSingOutAlt,
  UilArrowUpLeft,
  UilArrowsV,
  UilCalculator,
  UilMoneyWithdrawal,
  

} from "@iconscout/react-unicons"

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'
import logo from '../imgs/logo.png'

export const SidebarData = [
  {
    icon:<UilEstate></UilEstate>,
    heading:"Dashboard"
  },
  {
    icon:<UilClipboardAlt></UilClipboardAlt>,
    heading:"Skill"
  },
  {
    icon:<UilPackage></UilPackage>,
    heading:"Order"
  },
  {
    icon:<UilChart></UilChart>,
    heading:"Chart"
  },
  {
    icon:<UilArrowUpLeft></UilArrowUpLeft>,
    heading:"Log In"
  },
  {
    icon:<UilArrowsV></UilArrowsV>,
    heading:"Register"
  }


]

export const CardsData =[
  {
    title: "Sales",
    color:{
      backGround:"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow:"0px 10px 20px 0px #e0c6f5"
    },
    barValue:70,
    value: "25,970",
    Png:UilCalculator,
    series: [
      {
        name:"Sales",
        data: [31,39,48,56,32,43,50]
      },
    ],
  },

  {
    title: "Revenue",
    color:{
      backGround:"linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow:"0px 10px 20px 0px #FDC0C7"
    },
    barValue:80,
    value: "14,990",
    Png:UilMoneyWithdrawal,
    series: [
      {
        name:"Sales",
        data: [31,39,48,56,32,43,50]
      },
    ],
  },


  {
    title: "Expenses",
    color:{
      backGround:"linear-gradient(rgb(248,212,154) -146.43%, rgb(255,202,113) -46.42%)",
      boxShadow:"0px 10px 20px 0px #F9D59B"
    },
    barValue:65,
    value: "25,970",
    Png:UilClipboardAlt,
    series: [
      {
        name:"Sales",
        data: [20,39,48,80,32,43,58]
      },
    ],
  },

]

export const UpdaatesData = [
  {
    img: img1,
    name:"Arup Mondol",
    noti:"Has been order for a few times. This is Best Product",
    time:"2 hours Ago"
  },
  {
    img: img2,
    name:"Rabi",
    noti:"Has been order for a few times. This is Best Product",
    time:"30 munites Ago"
  },
  {
    img: img3,
    name:"Siam",
    noti:"Has been order for a few times. This is Best Product",
    time:"1 hours Ago"
  },
]