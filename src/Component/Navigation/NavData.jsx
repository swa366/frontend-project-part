import {
    MdOutlineProductionQuantityLimits,
    MdOutlineCategory,
    MdMiscellaneousServices,
    MdConnectWithoutContact,
    MdEmojiPeople,
  } from "react-icons/md";
  import { TbBrandBooking } from "react-icons/tb";
  import { GiTwoCoins } from "react-icons/gi";
  import { FaGifts } from "react-icons/fa";
  import { IoMdCloudDownload } from "react-icons/io";
  import {AiFillHome} from "react-icons/ai"
  export const NavData = [
    {
      title: "Dashboard",
      path: "/",
      icon: <AiFillHome className="w-6 h-6" />,
    },
    {
      title: "Brand",
      path: "/brand",
      icon: <TbBrandBooking className="w-6 h-6" />,
    },
    {
      title: "Category",
      path: "/category",
      icon: <MdOutlineCategory className="w-6 h-6" />,
    },
    {
      title: "Product",
      path: "/product",
      icon: <MdOutlineProductionQuantityLimits className="w-6 h-6" />,
    },
    {
      title: "Service",
      path: "/service",
      icon: <MdMiscellaneousServices className="w-6 h-6" />,
    },
    {
      title: "Special Offers",
      path: "/specialOffers",
      icon: <FaGifts className="w-6 h-6" />,
    },
    {
      title: "Customers",
      path: "/customers",
      icon: <MdConnectWithoutContact className="w-6 h-6" />,
    },
    {
      title: "Sales",
      path: "/sales",
      icon: <GiTwoCoins className="w-6 h-6" />,
    },
    {
      title: "Staff",
      path: "/staff",
      icon: <MdEmojiPeople className="w-6 h-6" />,
    },
    {
      title: "Download_Reports",
      path: "/downloadReports",
      icon: <IoMdCloudDownload className="w-6 h-6" />,
    },
  ];