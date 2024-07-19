import { Icon } from "@iconify/react";



const socialLinks = [
  {
    id: 1,
    icon: <Icon icon="uit:youtube" />,
    link: "https://www.youtube.com/channel/UCp3Dy-Tv2xmdGT-Wwqrkn2g"
  },
  {
    id: 2,
    icon: <Icon icon="circum:instagram" />,
    link: "https://www.instagram.com/edumynation/"
  },
  {
    id: 3,
    icon: <Icon icon="raphael:facebook" />,
    link: "https://www.facebook.com/edumynation"
  },
  {
    id: 4,
    icon: <Icon icon="arcticons:x-twitter" />,
    link: "https://twitter.com/edumynation"
  }
];


const contactList = [
  {
    id: 1,
    type: 'location',
    address: "903, Saeed Tower-1, Sheikh Zayed Road Dubai, UAE",
    icon: <Icon icon="system-uicons:location" />,
    link: "https://www.google.com/maps/place/Saeed+Tower+I/@25.2179078,55.2699031,15z/data=!4m6!3m5!1s0x3e5f42edfa092c73:0x1d6fa587851de136!8m2!3d25.2225203!4d55.2816922!16s%2Fg%2F11b6gqh1ck?entry=ttu"
  },
  {
    id: 2,
    type: 'phone',
    number: "+971 52 102 6963",
    icon: <Icon icon="ph:phone-thin" />,
    link: "tel:+971521026963"
  },
  {
    id: 3,
    type: 'mail',
    address: "info@edumynation.com",
    icon: <Icon icon="material-symbols-light:mail-outline" />,
    link: "mailto:info@edumynation.com"
  },
  {
    id: 4,
    type: 'jobs-internships',
    text: "For Job and Internship: ",
    icon: <Icon icon="marketeq:job" />,
    link: "tel:+971521026963"
  }
];

export default function SocialContacts() {

  return (
    <div className="social-contacts">
      <div className="contact-info">
        <div className="heading">
          Contact Us
        </div>
        <div className="contact-list">

        </div>
      </div>
      <div className="social">
        <div className="heading">
          Social Profiles
        </div>
      </div>
    </div>
  );
}
