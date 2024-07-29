import icon_arrow_down from "@assets/images/icons/icon_arrow_down_right_white.svg";
import icon_gallary from "@assets/images/icons/icon_gallery.png";
import icon_browser from "@assets/images/icons/icon_browser.png";
import icon_merketing from "@assets/images/icons/icon_marketing.png";
import icon_comment from "@assets/images/icons/icon_comment.png";
import btn_icon from "@assets/images/icons/icon_arrow_up_right_white.svg";
import btn_icon_2 from "@assets/images/icons/icon_arrow_down_right_white.svg";
import icon_arrow from '@assets/images/icons/icon_arrow_down_right_dark.svg'
import icon_arrow_primary from '@assets/images/icons/icon_arrow_down_right_primary.svg'
import IconSvgOne from "@svg/icon-svg-1";
import IconSvgTwo from "@svg/icon-svg-2";
import IconSvgThere from "@svg/icon-svg-3";
import IconSvgFour from "@svg/icon-svg-4";
import IconSvgFive from "@svg/icon-svg-5";
import IconSvgSix from "@svg/icon-svg-6";
import IconSvgSeven from "@svg/icon-svg-7";
import icon_gallery from "@assets/images/icons/icon_gallery_2.png";
import BtnIcon from "@svg/btn-icon-1";
import ServiceIconOne from "@svg/service-icon-1";
import ServiceIconTwo from "@svg/service-icon-2";
import ServiceIconThere from "@svg/service-icon-3";
import ServiceIconFour from "@svg/service-icon-4";
import ServiceIconFive from "@svg/service-icon-5";
import ServiceIconSix from "@svg/service-icon-6";
import icon from "@assets/images/icons/icon_arrow_down_right_dark_2.svg";
import img_1 from "@assets/images/icons/icon_code_5.svg";
import img_2 from "@assets/images/icons/icon_house_2.svg";
import icon_grid from "@assets/images/icons/icon_grid_2.svg";
import icon_speaker from "@assets/images/icons/icon_speaker.svg";
import icon_camera from "@assets/images/icons/icon_camera_2.svg";
import icon_code_4 from "@assets/images/icons/icon_code_4.svg";
import icon_idea from "@assets/images/icons/icon_idea_3.svg";
import icon_cog from "@assets/images/icons/icon_cog.svg";
import icon_camera_2 from "@assets/images/icons/icon_camera_2.svg";
import shape_color_1 from "@assets/images/shapes/shape_color_1.svg";
import shape_color_2 from "@assets/images/shapes/shape_color_2.svg";
import shape_color_3 from "@assets/images/shapes/shape_color_3.svg";
import shape_color_4 from "@assets/images/shapes/shape_color_4.svg";
import shape_color_5 from "@assets/images/shapes/shape_color_5.svg";
import shape_color_6 from "@assets/images/shapes/shape_color_6.svg";
import shape_color_7 from "@assets/images/shapes/shape_color_7.svg";
import shape_color_8 from "@assets/images/shapes/shape_color_8.svg";
import shape_color_9 from "@assets/images/shapes/shape_color_5.svg";

const service_data = [
  //home-5 service data    //home-3 service-data  //home-4 service data
  {
    id: 1,
    title: "Business",
    titleTwo: "Planning",
    fullTitle: "Business Planning",
    icon_arrow_down: icon_arrow_down,
    image: icon_gallary,
    category: "UI/UX Design",
    description: "Our action plan is focused and planned. We are oriented organization and are committed to invest",
    btn_icon: btn_icon,
    item_title: ' Website Development',
    item_description: ' We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'far fa-code',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  },
  {
    id: 2,
    title: "Consulting",
    titleTwo: "Service",
    fullTitle: "Consulting Service",
    icon_arrow_down: icon_arrow_down,
    image: icon_browser,
    category: "Website Development",
    description: "action plan is focused and planned. We are oriented organization and are committed to invest",
    btn_icon: btn_icon,
    item_title: ' UX/UI Design',
    item_description: ' We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'far fa-home',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  },
  {
    id: 3,
    title: "Sales &",
    titleTwo: "Marketing",
    fullTitle: "Sales & Marketing",
    icon_arrow_down: icon_arrow_down,
    image: icon_merketing,
    category: "Email Marketing",
    description: "Plan is focused and planned. We are oriented organization and are committed to invest newer.",
    btn_icon: btn_icon,
    item_title: 'App Development',
    item_description: 'We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'fa-sharp fa-light fa-grid-2',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  },
  {
    id: 4,
    title: "Inventory",
    titleTwo: "Management",
    fullTitle: "Inventory Management",
    icon_arrow_down: icon_arrow_down,
    image: icon_comment,
    category: "OTP Service",
    description: "Our action plan is focused and planned. We are oriented organization and are committed to invest",
    btn_icon: btn_icon,
    item_title: 'Video Editing',
    item_description: 'We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'far fa-video',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  },
  {
    id: 5,
    title: "Best Cost",
    titleTwo: "Reductions",
    fullTitle: "Best Cost Reductions",
    icon_arrow_down: icon_arrow_down,
    image: icon_gallary,
    category: "Tech Support",
    description: "Our action plan is focused and planned. We are oriented organization and are committed to invest",
    btn_icon: btn_icon,
    item_title: ' Programming & Tech',
    item_description: 'We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'fa-regular fa-brackets-curly fa-flip-both',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  },
  {
    id: 6,
    title: "Save More",
    titleTwo: "Money",
    fullTitle: "Save More Money",
    icon_arrow_down: icon_arrow_down,
    image: icon_browser,
    category: "Easy Payment",
    description: "Our action plan is focused and planned. We are oriented organization and are committed to invest",
    btn_icon: btn_icon,
    item_title: 'Business Consulting',
    item_description: 'We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'fa-sharp fa-light fa-grid-2',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  },
  {
    id: 7,
    title: "Save More",
    titleTwo: "Money",
    fullTitle: "Save More Money",
    icon_arrow_down: icon_arrow_down,
    image: icon_comment,
    category: "OTP Service",
    description: "Our action plan is focused and planned. We are oriented organization and are committed to invest",
    btn_icon: btn_icon,
    item_title: 'App Development',
    item_description: 'We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'fa-sharp fa-light fa-grid-2',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  },
  //home service_data
  {
    id: 8,
    icon: <IconSvgOne />,
    category: "Website Development",
    description: "We help generate positive cash flow and use revenue data",
    btn_icon: <BtnIcon />,
    fullTitle: "Website Development",
  },
  {
    id: 9,
    icon: <IconSvgTwo />,
    category: "UX/UI Design",
    description: "We help to generte positive cash flow and use the proceeds Data",
    btn_icon: <BtnIcon />,
    fullTitle: "UX/UI Design",
  },
  {
    id: 10,
    icon: <IconSvgThere />,
    category: "App Development",
    description: "We help to generte positive cash flow and use the proceeds Data",
    btn_icon: <BtnIcon />,
    fullTitle: "App Development",
  },
  {
    id: 11,
    icon: <IconSvgFour />,
    category: "Video Editing",
    description:
      "We help to generte positive cash flow and use the proceeds Data",
    btn_icon: <BtnIcon />,
    fullTitle: "Video Editing",
  },
  {
    id: 12,
    icon: <IconSvgFive />,
    category: "Apps Development",
    description:
      "We help to generte positive cash flow and use the proceeds Data",
    btn_icon: <BtnIcon />,
    fullTitle: "Apps Development",
  },
  {
    id: 13,
    icon: <IconSvgSix />,
    category: "Graphics Design",
    description:
      "We help to generte positive cash flow and use the proceeds Data",
    btn_icon: <BtnIcon />,
    fullTitle: "UX/UI Design",
  },
  {
    id: 14,
    icon: <IconSvgSeven />,
    category: "Website Development",
    description: "We help generate positive cash flow and use revenue data",
    btn_icon: <BtnIcon />,
    fullTitle: "Website Development",
  },
  {
    //home 2 service_data
    id: 15,
    description:
      "We help to generte positive cash flow & use the proceeds in further eansions  relationship design.",
    title: "Mobile Furniture Store App",
    icon_gallery: icon_gallery,
    icon_arrow_down: icon_arrow_down,
    fullTitle: "Mobile Furniture Store App",
  },
  {
    id: 16,
    title: "Street Art Map of the City",
    description:
      "We help to generte positive cash flow & use the proceeds in further eansions  relationship design.",
    icon_gallery: icon_browser,
    icon_arrow_down: icon_arrow_down,
    fullTitle: "Street Art Map of the City",
  },
  {
    id: 17,
    title: "Crafting Effective Landing Page",
    description:
      "We help to generte positive cash flow & use the proceeds in further eansions  relationship design.",
    icon_gallery: icon_browser,
    icon_arrow_down: icon_arrow_down,
    fullTitle: "Crafting Effective Landing Page",
  },
  {
    id: 18,
    title: "3D Package Tracking Delivery",
    description_2:
      "We help to generte positive cash flow & use the proceeds in further eansions  relationship design.",
    icon_gallery: icon_browser,
    icon_arrow_down: icon_arrow_down,
    fullTitle: "3D Package Tracking Delivery",
  },
  //home 5 service_data
  {
    id: 19,
    icon: <ServiceIconOne />,
    title: "Business",
    titleTwo: "Planning",
    description: "We help generate positive cash flow and use revenue data",
    btn_icon: btn_icon_2,
    fullTitle: "Business Planning",
  },
  {
    id: 20,
    icon: <ServiceIconTwo />,
    title: "Consulting",
    titleTwo: "Service",
    btn_icon: btn_icon_2,
    fullTitle: "Consulting Service",
  },
  {
    id: 21,
    icon: <ServiceIconThere />,
    title: "Sales &",
    titleTwo: "Marketing",
    btn_icon: btn_icon_2,
    fullTitle: "Sales & Marketing",
  },
  {
    id: 22,
    icon: <ServiceIconFour />,
    title: "Inventory",
    titleTwo: "Management",
    btn_icon: btn_icon_2,
    fullTitle: "Inventory Management",
  },
  {
    id: 23,
    icon: <ServiceIconFive />,
    title: "Best Cost",
    titleTwo: "Reductions",
    btn_icon: btn_icon_2,
    fullTitle: "Best Cost Reductions",
  },
  {
    id: 24,
    icon: <ServiceIconSix />,
    title: "Save More",
    titleTwo: "Money",
    btn_icon: btn_icon_2,
    fullTitle: "Save More Money",
  },
  //home-6 added service data
  {
    id: 25,
    icon_svg: img_1,
    overlay_bg: shape_color_1,
    title: "Development",
    description: "We are help  generate positive the cash flow",
    btn_icon: icon,
    fullTitle: "Development",
  },
  {
    id: 26,
    overlay_bg: shape_color_2,
    icon_svg: img_2,
    title: "UX/UI Design",
    description: "We are help  generate positive the cash flow",
    btn_icon: icon,
    fullTitle: "UX/UI Design",
  },
  {
    id: 27,
    overlay_bg: shape_color_3,
    icon_svg: icon_grid,
    title: "Application",
    description: "We are help  generate positive the cash flow",
    btn_icon: icon,
    fullTitle: "Application",
  },
  {
    id: 28,
    overlay_bg: shape_color_4,
    icon_svg: icon_speaker,
    title: " Marketing",
    description: "We are help  generate positive the cash flow",
    btn_icon: icon,
    fullTitle: "Marketing",
  },
  {
    id: 29,
    overlay_bg: shape_color_5,
    icon_svg: icon_camera,
    title: "Video Editing",
    description: "We are help  generate positive the cash flow",
    btn_icon: icon,
    fullTitle: "Video Editing",
  },
  {
    id: 30,
    overlay_bg: shape_color_6,
    icon_svg: icon_code_4,
    title: " Programming",
    description: "We are help  generate positive the cash flow",
    btn_icon: icon,
    fullTitle: "Programming",
  },
  {
    id: 31,
    overlay_bg: shape_color_7,
    icon_svg: icon_idea,
    title: "Business",
    description: "We are help  generate positive the cash flow",
    btn_icon: icon,
    fullTitle: "Business",
  },
  {
    id: 32,
    overlay_bg: shape_color_8,
    icon_svg: icon_cog,
    title: "Tech Support",
    description: "We are help  generate positive the cash flow",
    btn_icon: icon,
    fullTitle: "Tech Support",
  },
  {
    id: 33,
    overlay_bg: shape_color_9,
    icon_svg: icon_camera_2,
    title: "Video Editing",
    description: "We are help  generate positive the cash flow",
    btn_icon: icon,
    fullTitle: "Video Editing",
  },
  // home 4 data
  {
    id: 34,
    fullTitle: "Website Development",
    item_title: 'Website Development',
    item_description: 'We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'far fa-code',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  },
  {
    id: 35,
    fullTitle: "UX/UI Design",
    item_title: 'UX/UI Design',
    item_description: 'We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'far fa-home',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  },
  {
    id: 36,
    fullTitle: "App Development",
    item_title: 'App Development',
    item_description: 'We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'fa-sharp fa-light fa-grid-2',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  },
  {
    id: 37,
    fullTitle: "Video Editing",
    item_title: 'Video Editing',
    item_description: 'We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'far fa-video',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  },
  {
    id: 38,
    fullTitle: "Programming & Tech",
    item_title: 'Programming & Tech',
    item_description: 'We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'fa-regular fa-brackets-curly fa-flip-both',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  },
  {
    id: 39,
    fullTitle: "Business Consulting",
    item_title: 'Business Consulting',
    item_description: 'We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'fa-sharp fa-light fa-grid-2',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  },
  {
    id: 40,
    fullTitle: "App Development",
    item_title: 'App Development',
    item_description: 'We help to generte positive cash flow and use the proceeds in further',
    font_awasame_icon: 'fa-sharp fa-light fa-grid-2',
    icon: icon_arrow,
    primary_icon: icon_arrow_primary
  }
];
export default service_data;
