
import { faReact } from "@fortawesome/free-brands-svg-icons";  // react
import { faDatabase } from "@fortawesome/free-solid-svg-icons";  // sql db
import { faFire } from "@fortawesome/free-solid-svg-icons";  // firebase
import { faPython } from "@fortawesome/free-brands-svg-icons";  // python
import { faAndroid } from "@fortawesome/free-brands-svg-icons";  // android
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";  // mfc
import { faWindows } from "@fortawesome/free-brands-svg-icons";  // c#
import { faEdgeLegacy } from "@fortawesome/free-brands-svg-icons";  // asp net
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";  // bootstrap
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";  // bootstrap

export const projects = [
  {
    title: "Myoji Birthday Video and Slideshow Maker",
    subtitle: "Java Android App",
    description:
    "Myoji Birthdays app allows you to create beautiful videos using photos from your mobile galleries",
    image: "./project-1.webp",
    link: "https://play.google.com/store/apps/details?id=phototovideo.withmusic&hl=en&gl=US",
  },
  {
    title: "Myoji Clips",
    subtitle: "Java Android App",
    description:
    "Contains Ads·Offers & in-app purchases",
    image: "./project-2.webp",
    link: "https://play.google.com/store/apps/details?id=com.slevinto.MyojiClips&hl=en&gl=US",
  },
  {
    title: "SendEmail",
    subtitle: "Java Android App",
    description:
      "Initiated interrupt of the phone call after defined period of minutes and send email with recorded call",
    image: "./android.webp"
  },
  {
    title: "Web Services, Rest API, SQL",
    subtitle: "#ASP.Net C",
    description:
      "Website for prices comparison for Rami Levi, Complicated internal use website for El-Al",
    image: "./icon-aspnet.webp"
  },
  {
    title: "Web scrapping",
    subtitle: "#Selenium C",
    description:
      "Website yad2.co.il scrapping, including captcha solve",
    image: "./selenium.webp"
  },
  {
    title: "varied MFC projects",
    subtitle: "#MFC C",
    description:
      ".Driver Installer, Web Scrapper, etc",
    image: "./mfc.webp"
  },
  {
    title: "Web scrapping",
    subtitle: "Python",
    description:
      "Variety of Web sites scrapping",
    image: "./python.webp"
  },
  {
    title: "QuietGuest",
    subtitle: "Xamarin",
    description:
      "Call to electric gate when SMS sent with specific text",
    image: "./xamarin.webp"
  },
];

export const testimonials = [
  {
    image: "./testimonials_1.webp",    
  },
  {
    image: "./testimonials_2.webp",    
  },
];

export const skills = [
  {
    skillIcon: faEdgeLegacy,
    title: "ASP .NET",
    description: "Responsive Web Sites, REST API, Web Services, Selenium"
  },
 {
    skillIcon: faMicrosoft,
    title: "MFC",
    description: " ",    
  },
  {
    skillIcon: faAndroid,
    title: "Android native applications",
    description: "Java, Kotlin, In-App purchase, Google Ads, PlayMarket"
  },
  {
    skillIcon: faPython,
    title: "Python",
    description: "Web scrapping, Selenium, Excel"
  },
  {
    skillIcon: faReact,
    title: "Reactjs",
    description: "Web sites, landing pages, tailwindcss, deploy to heroku"
  },
  {
    skillIcon: faDatabase,
    title: "MS SQL DB",
    description: "Web sites"
  },
  {
    skillIcon: faFire,
    title: "Firebase",
    description: "Android applicationd"
  },
  {
    skillIcon: faWindows,
    title: "#C",
    description: " ",
  },
  {
    skillIcon: faBootstrap,
    title: "bootstrap",
    description: "responsive web sites"
  },
  {
    skillIcon: faGooglePlay,
    title: "Google Play",
    description: "Android applications deployment to Google Play"
  },
  {
    title: "Selenium",
    description: "Web scraping"
  },
  {
    title: "Xamarin",
    description: "Mobile hybrid applications"
  }
];
