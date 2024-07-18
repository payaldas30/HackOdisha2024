"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";
import "./Faq.css";

export default function Faq() {
  const accordionData = [
    {
      serial: "01",
      question: "What is a hackathon?",
      answer:
        "A hackathon is an invention marathon where you can work with people around the globe to build a project related to technology! It isn't about hacking into a system, it's instead about hacking something together and learning a great deal in the process.",
    },
    {
      serial: "02",
      question: "Can we work on old or ongoing projects?",
      answer:
        "No, you have to start from scratch. You can use open source libraries and frameworks.",
    },
    {
      serial: "03",
      question: "How many members do we need in a team?",
      answer:
        "You can submit solo as well a team with at max 4 members can be formed.",
    },
    {
      serial: "04",
      question: "Registration costs?",
      answer: "Nada",
    },
    {
      serial: "05",
      question: "Can I apply for multiple tracks?",
      answer:
        "Sure thing! Apply for all the tracks you want, like a kid in a candy store! 🏃🍭😄. Just make sure to be relevant.",
    },
    {
      serial: "06",
      question: "Who can participate?",
      answer:
        "Everyone is welcome to participate, be it, students, professionals, or aliens from different planets!",
    },
    {
      serial: "07",
      question: "Is physical presence required, or can we hack remotely?",
      answer: "Nah, no need for pants, go remote! 🏠😄",
    },
    {
      serial: "08",
      question: "What is a hackathon?",
      answer:
        "A hackathon is an invention marathon where you can work with people around the globe to build a project related to technology! It isn't about hacking into a system, it's instead about hacking something together and learning a great deal in the process.",
    },
    {
      serial: "09",
      question: "What is a hackathon?",
      answer:
        "A hackathon is an invention marathon where you can work with people around the globe to build a project related to technology! It isn't about hacking into a system, it's instead about hacking something together and learning a great deal in the process.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FFF6E0] flex justify-between">
      <div className="w-1/6 h-[240vh] flex flex-col justify-between">
        <div className="w-full flex justify-center mt-32">
          <svg
            className="w-2/5 h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md"
            height="40"
            width="40"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 85 62"
            fill="none"
          >
            <path
              d="M71.9407 30.6321C79.9825 22.9111 85 12.0283 85 0H60.279C60.279 9.82884 52.3059 17.779 42.5 17.779C32.6712 17.779 24.721 9.80593 24.721 0H0C0 12.0283 5.01752 22.9111 13.0593 30.6321C5.01752 38.3531 0 49.2359 0 61.2642H24.6981C24.6981 51.4353 32.6712 43.4852 42.4771 43.4852C52.3059 43.4852 60.2561 51.4582 60.2561 61.2642H84.9542C85 49.2359 79.9825 38.3531 71.9407 30.6321Z"
              fill="#E47C1B"
            />
          </svg>
        </div>
        <div className="w-full flex justify-center items-end mb-24">
          <svg
            className="w-2/5 h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 85 62"
            fill="none"
          >
            <path
              d="M40.8498 40.85C48.37 33.3298 48.37 21.137 40.8498 13.6168C33.3295 6.09658 21.1368 6.09658 13.6166 13.6168C6.09635 21.137 6.09635 33.3297 13.6166 40.85C21.1368 48.3702 33.3295 48.3702 40.8498 40.85Z"
              fill="#E47C1B"
            />
            <path
              d="M65.7433 46.4929C76.3786 46.4929 85.0002 37.8713 85.0002 27.2359C85.0002 16.6006 76.3786 7.979 65.7433 7.979C55.108 7.979 46.4863 16.6006 46.4863 27.2359C46.4863 37.8713 55.108 46.4929 65.7433 46.4929Z"
              fill="#E47C1B"
            />
            <path
              d="M27.2296 69.1191C37.8649 69.1191 46.4865 64.054 46.4865 57.8059C46.4865 51.5578 37.8649 46.4927 27.2296 46.4927C16.5943 46.4927 7.97266 51.5578 7.97266 57.8059C7.97266 64.054 16.5943 69.1191 27.2296 69.1191Z"
              fill="#E47C1B"
            />
            <path
              d="M65.7433 69.1191C76.3786 69.1191 85.0002 64.054 85.0002 57.8059C85.0002 51.5578 76.3786 46.4927 65.7433 46.4927C55.108 46.4927 46.4863 51.5578 46.4863 57.8059C46.4863 64.054 55.108 69.1191 65.7433 69.1191Z"
              fill="#E47C1B"
            />
            <path
              d="M27.2296 80.4323C37.8649 80.4323 46.4865 77.8998 46.4865 74.7757C46.4865 71.6517 37.8649 69.1191 27.2296 69.1191C16.5943 69.1191 7.97266 71.6517 7.97266 74.7757C7.97266 77.8998 16.5943 80.4323 27.2296 80.4323Z"
              fill="#E47C1B"
            />
            <path
              d="M65.7433 80.4323C76.3786 80.4323 85.0002 77.8998 85.0002 74.7757C85.0002 71.6517 76.3786 69.1191 65.7433 69.1191C55.108 69.1191 46.4863 71.6517 46.4863 74.7757C46.4863 77.8998 55.108 80.4323 65.7433 80.4323Z"
              fill="#E47C1B"
            />
          </svg>
        </div>
      </div>

      <div className="bg-[#FFF6E0]  w-4/6 h-full flex flex-col   ">
        <div className="w-full h-16"></div>
        <div className="accordion bg-[#FFF6E0] w-full flex flex-col ">
          <div className="w-full flex justify-center items-center">
            <svg
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
              width="512"
              height="65"
              viewBox="0 0 512 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6107 59.4751H0.670181L23.9485 35.9666L0.670181 12.4751H20.6107L43.9062 35.9666L20.6107 59.4751Z"
                fill="#BF2E2E"
              />
              <path
                d="M65.4204 59.4751H45.4627L68.7581 35.9666L45.4627 12.4751H65.4204L88.7158 35.9666L65.4204 59.4751Z"
                fill="#BF2E2E"
              />
              <path
                d="M110.216 59.4751H90.2586L113.554 35.9666L90.2586 12.4751H110.216L133.512 35.9666L110.216 59.4751Z"
                fill="#BF2E2E"
              />
              <mask
                id="path-4-outside-1_1239_3874"
                maskUnits="userSpaceOnUse"
                x="163.488"
                y="11.9502"
                width="189"
                height="56"
                fill="black"
              >
                <rect
                  fill="white"
                  x="163.488"
                  y="11.9502"
                  width="189"
                  height="56"
                />
                <path d="M164.224 13.9182H199.808V24.4782H178.368V32.0302H196.8V42.1422H178.368V57.9502H164.224V13.9182ZM233.616 57.9502L231.76 51.7422H216.336L214.48 57.9502H200.016L216.08 13.9182H232.528L248.592 57.9502H233.616ZM219.28 41.8862H228.816L224.208 26.2062H223.952L219.28 41.8862ZM254.081 35.9342C254.081 28.4675 256.129 22.8142 260.225 18.9742C264.363 15.0915 270.23 13.1502 277.825 13.1502C285.419 13.1502 291.286 15.0915 295.425 18.9742C299.563 22.8569 301.633 28.5102 301.633 35.9342C301.633 40.8835 300.694 45.0649 298.817 48.4782C296.982 51.8489 294.294 54.4089 290.753 56.1582L300.801 66.3342H283.969L277.185 58.7182C269.761 58.5902 264.043 56.6062 260.033 52.7662C256.065 48.8835 254.081 43.2729 254.081 35.9342ZM287.169 33.8862C287.169 30.7715 286.358 28.2969 284.737 26.4622C283.158 24.6275 280.854 23.7102 277.825 23.7102C274.795 23.7102 272.491 24.6275 270.913 26.4622C269.334 28.2969 268.545 30.7715 268.545 33.8862V37.9822C268.545 41.0969 269.334 43.5715 270.913 45.4062C272.491 47.2409 274.795 48.1582 277.825 48.1582C280.854 48.1582 283.158 47.2409 284.737 45.4062C286.358 43.5715 287.169 41.0969 287.169 37.9822V33.8862ZM330.945 13.1502C336.577 13.1502 341.207 14.3022 344.833 16.6062C348.46 18.8675 350.316 22.2382 350.401 26.7182V27.4862H337.153V27.2302C337.153 25.9502 336.684 24.8835 335.745 24.0302C334.807 23.1769 333.377 22.7502 331.457 22.7502C329.58 22.7502 328.129 23.0275 327.105 23.5822C326.124 24.1369 325.633 24.8195 325.633 25.6302C325.633 26.7822 326.316 27.6355 327.681 28.1902C329.047 28.7449 331.244 29.3209 334.273 29.9182C337.815 30.6435 340.716 31.4115 342.977 32.2222C345.281 32.9902 347.287 34.2702 348.993 36.0622C350.7 37.8542 351.575 40.2862 351.617 43.3582C351.617 48.5635 349.847 52.4249 346.305 54.9422C342.807 57.4595 338.113 58.7182 332.225 58.7182C325.356 58.7182 320.001 57.5662 316.161 55.2622C312.364 52.9582 310.465 48.8835 310.465 43.0382H323.841C323.841 45.2569 324.417 46.7502 325.569 47.5182C326.721 48.2435 328.513 48.6062 330.945 48.6062C332.737 48.6062 334.209 48.4142 335.361 48.0302C336.556 47.6462 337.153 46.8569 337.153 45.6622C337.153 44.5955 336.492 43.8062 335.169 43.2942C333.889 42.7395 331.777 42.1635 328.833 41.5662C325.249 40.7982 322.284 40.0089 319.937 39.1982C317.591 38.3449 315.543 36.9582 313.793 35.0382C312.044 33.1182 311.169 30.5155 311.169 27.2302C311.169 22.4089 313.025 18.8675 316.737 16.6062C320.492 14.3022 325.228 13.1502 330.945 13.1502Z" />
              </mask>
              <path
                d="M164.224 13.9182V13.1912H163.497V13.9182H164.224ZM199.808 13.9182H200.535V13.1912H199.808V13.9182ZM199.808 24.4782V25.2051H200.535V24.4782H199.808ZM178.368 24.4782V23.7512H177.641V24.4782H178.368ZM178.368 32.0302H177.641V32.7571H178.368V32.0302ZM196.8 32.0302H197.527V31.3032H196.8V32.0302ZM196.8 42.1422V42.8691H197.527V42.1422H196.8ZM178.368 42.1422V41.4152H177.641V42.1422H178.368ZM178.368 57.9502V58.6771H179.095V57.9502H178.368ZM164.224 57.9502H163.497V58.6771H164.224V57.9502ZM164.224 14.6451H199.808V13.1912H164.224V14.6451ZM199.081 13.9182V24.4782H200.535V13.9182H199.081ZM199.808 23.7512H178.368V25.2051H199.808V23.7512ZM177.641 24.4782V32.0302H179.095V24.4782H177.641ZM178.368 32.7571H196.8V31.3032H178.368V32.7571ZM196.073 32.0302V42.1422H197.527V32.0302H196.073ZM196.8 41.4152H178.368V42.8691H196.8V41.4152ZM177.641 42.1422V57.9502H179.095V42.1422H177.641ZM178.368 57.2232H164.224V58.6771H178.368V57.2232ZM164.951 57.9502V13.9182H163.497V57.9502H164.951ZM233.616 57.9502L232.919 58.1584L233.074 58.6771H233.616V57.9502ZM231.76 51.7422L232.456 51.534L232.301 51.0152H231.76V51.7422ZM216.336 51.7422V51.0152H215.794L215.639 51.534L216.336 51.7422ZM214.48 57.9502V58.6771H215.021L215.176 58.1584L214.48 57.9502ZM200.016 57.9502L199.333 57.701L198.977 58.6771H200.016V57.9502ZM216.08 13.9182V13.1912H215.571L215.397 13.669L216.08 13.9182ZM232.528 13.9182L233.211 13.669L233.036 13.1912H232.528V13.9182ZM248.592 57.9502V58.6771H249.631L249.275 57.701L248.592 57.9502ZM219.28 41.8862L218.583 41.6786L218.305 42.6131H219.28V41.8862ZM228.816 41.8862V42.6131H229.787L229.513 41.6812L228.816 41.8862ZM224.208 26.2062L224.905 26.0012L224.752 25.4792H224.208V26.2062ZM223.952 26.2062V25.4792H223.41L223.255 25.9986L223.952 26.2062ZM234.312 57.742L232.456 51.534L231.063 51.9504L232.919 58.1584L234.312 57.742ZM231.76 51.0152H216.336V52.4691H231.76V51.0152ZM215.639 51.534L213.783 57.742L215.176 58.1584L217.032 51.9504L215.639 51.534ZM214.48 57.2232H200.016V58.6771H214.48V57.2232ZM200.699 58.1993L216.763 14.1673L215.397 13.669L199.333 57.701L200.699 58.1993ZM216.08 14.6451H232.528V13.1912H216.08V14.6451ZM231.845 14.1673L247.909 58.1993L249.275 57.701L233.211 13.669L231.845 14.1673ZM248.592 57.2232H233.616V58.6771H248.592V57.2232ZM219.28 42.6131H228.816V41.1592H219.28V42.6131ZM229.513 41.6812L224.905 26.0012L223.51 26.4112L228.118 42.0912L229.513 41.6812ZM224.208 25.4792H223.952V26.9331H224.208V25.4792ZM223.255 25.9986L218.583 41.6786L219.976 42.0938L224.648 26.4138L223.255 25.9986ZM260.225 18.9742L260.722 19.5045L260.722 19.5044L260.225 18.9742ZM298.817 48.4782L298.18 48.1279L298.178 48.1307L298.817 48.4782ZM290.753 56.1582L290.431 55.5064L289.528 55.9524L290.236 56.669L290.753 56.1582ZM300.801 66.3342V67.0611H302.54L301.318 65.8234L300.801 66.3342ZM283.969 66.3342L283.426 66.8177L283.643 67.0611H283.969V66.3342ZM277.185 58.7182L277.728 58.2347L277.516 57.9968L277.197 57.9914L277.185 58.7182ZM260.033 52.7662L259.524 53.2858L259.53 53.2913L260.033 52.7662ZM284.737 26.4622L284.186 26.9364L284.192 26.9436L284.737 26.4622ZM270.913 26.4622L271.464 26.9363L270.913 26.4622ZM284.737 45.4062L284.192 44.9248L284.186 44.932L284.737 45.4062ZM254.808 35.9342C254.808 28.5992 256.816 23.166 260.722 19.5045L259.728 18.4439C255.441 22.4624 253.354 28.3358 253.354 35.9342H254.808ZM260.722 19.5044C264.686 15.7859 270.351 13.8771 277.825 13.8771V12.4232C270.109 12.4232 264.041 14.3971 259.727 18.444L260.722 19.5044ZM277.825 13.8771C285.299 13.8771 290.964 15.7859 294.927 19.5044L295.922 18.444C291.608 14.3971 285.54 12.4232 277.825 12.4232V13.8771ZM294.927 19.5044C298.878 23.2107 300.906 28.646 300.906 35.9342H302.36C302.36 28.3744 300.249 22.503 295.922 18.444L294.927 19.5044ZM300.906 35.9342C300.906 40.7935 299.984 44.8471 298.18 48.1279L299.454 48.8285C301.404 45.2826 302.36 40.9736 302.36 35.9342H300.906ZM298.178 48.1307C296.417 51.3657 293.842 53.8214 290.431 55.5064L291.075 56.81C294.746 54.9963 297.547 52.3321 299.455 48.8257L298.178 48.1307ZM290.236 56.669L300.284 66.845L301.318 65.8234L291.27 55.6474L290.236 56.669ZM300.801 65.6072H283.969V67.0611H300.801V65.6072ZM284.512 65.8507L277.728 58.2347L276.642 59.2017L283.426 66.8177L284.512 65.8507ZM277.197 57.9914C269.893 57.8654 264.375 55.9169 260.536 52.2411L259.53 53.2913C263.712 57.2955 269.628 59.315 277.172 59.445L277.197 57.9914ZM260.541 52.2466C256.754 48.5405 254.808 43.1428 254.808 35.9342H253.354C253.354 43.403 255.376 49.2265 259.524 53.2858L260.541 52.2466ZM287.896 33.8862C287.896 30.644 287.049 27.9814 285.282 25.9808L284.192 26.9436C285.667 28.6123 286.442 30.8991 286.442 33.8862H287.896ZM285.288 25.988C283.537 23.9538 281.008 22.9832 277.825 22.9832V24.4371C280.7 24.4371 282.779 25.3012 284.186 26.9363L285.288 25.988ZM277.825 22.9832C274.641 22.9832 272.112 23.9538 270.362 25.988L271.464 26.9363C272.871 25.3012 274.95 24.4371 277.825 24.4371V22.9832ZM270.362 25.988C268.64 27.9888 267.818 30.6486 267.818 33.8862H269.272C269.272 30.8945 270.028 28.605 271.464 26.9363L270.362 25.988ZM267.818 33.8862V37.9822H269.272V33.8862H267.818ZM267.818 37.9822C267.818 41.2198 268.64 43.8796 270.362 45.8803L271.464 44.932C270.028 43.2634 269.272 40.9739 269.272 37.9822H267.818ZM270.362 45.8803C272.112 47.9146 274.641 48.8851 277.825 48.8851V47.4312C274.95 47.4312 272.871 46.5671 271.464 44.932L270.362 45.8803ZM277.825 48.8851C281.008 48.8851 283.537 47.9146 285.288 45.8803L284.186 44.932C282.779 46.5671 280.7 47.4312 277.825 47.4312V48.8851ZM285.282 45.8876C287.049 43.887 287.896 41.2244 287.896 37.9822H286.442C286.442 40.9693 285.667 43.2561 284.192 44.9248L285.282 45.8876ZM287.896 37.9822V33.8862H286.442V37.9822H287.896ZM344.833 16.6062L344.443 17.2198L344.449 17.2231L344.833 16.6062ZM350.401 26.7182H351.128L351.128 26.7043L350.401 26.7182ZM350.401 27.4862V28.2131H351.128V27.4862H350.401ZM337.153 27.4862H336.426V28.2131H337.153V27.4862ZM335.745 24.0302L336.234 23.4923L335.745 24.0302ZM327.105 23.5822L326.759 22.9429L326.748 22.9493L327.105 23.5822ZM327.681 28.1902L327.955 27.5167L327.681 28.1902ZM334.273 29.9182L334.419 29.206L334.414 29.205L334.273 29.9182ZM342.977 32.2222L342.732 32.9065L342.74 32.9093L342.747 32.9118L342.977 32.2222ZM351.617 43.3582H352.344L352.344 43.3481L351.617 43.3582ZM346.305 54.9422L345.884 54.3497L345.881 54.3521L346.305 54.9422ZM316.161 55.2622L315.784 55.8837L315.787 55.8856L316.161 55.2622ZM310.465 43.0382V42.3112H309.738V43.0382H310.465ZM323.841 43.0382H324.568V42.3112H323.841V43.0382ZM325.569 47.5182L325.166 48.1231L325.174 48.1283L325.182 48.1334L325.569 47.5182ZM335.361 48.0302L335.139 47.3381L335.131 47.3405L335.361 48.0302ZM335.169 43.2942L334.88 43.9612L334.893 43.9669L334.907 43.9721L335.169 43.2942ZM328.833 41.5662L328.681 42.2771L328.689 42.2786L328.833 41.5662ZM319.937 39.1982L319.689 39.8815L319.7 39.8853L319.937 39.1982ZM313.793 35.0382L313.256 35.5278L313.793 35.0382ZM316.737 16.6062L317.115 17.227L317.117 17.2258L316.737 16.6062ZM330.945 13.8771C336.481 13.8771 340.964 15.0096 344.443 17.2198L345.223 15.9926C341.449 13.5948 336.673 12.4232 330.945 12.4232V13.8771ZM344.449 17.2231C347.855 19.3468 349.594 22.4837 349.674 26.732L351.128 26.7043C351.038 21.9927 349.065 18.3882 345.218 15.9893L344.449 17.2231ZM349.674 26.7182V27.4862H351.128V26.7182H349.674ZM350.401 26.7592H337.153V28.2131H350.401V26.7592ZM337.88 27.4862V27.2302H336.426V27.4862H337.88ZM337.88 27.2302C337.88 25.7475 337.326 24.4848 336.234 23.4923L335.256 24.5681C336.042 25.2822 336.426 26.1529 336.426 27.2302H337.88ZM336.234 23.4923C335.107 22.4679 333.468 22.0232 331.457 22.0232V23.4771C333.287 23.4771 334.506 23.8858 335.256 24.5681L336.234 23.4923ZM331.457 22.0232C329.525 22.0232 327.935 22.3058 326.759 22.943L327.452 24.2214C328.323 23.7492 329.635 23.4771 331.457 23.4771V22.0232ZM326.748 22.9493C325.638 23.5763 324.906 24.4596 324.906 25.6302H326.36C326.36 25.1794 326.61 24.6974 327.463 24.2151L326.748 22.9493ZM324.906 25.6302C324.906 26.3616 325.127 27.0254 325.578 27.5883C326.019 28.14 326.648 28.5552 327.408 28.8637L327.955 27.5167C327.349 27.2705 326.954 26.9817 326.713 26.6801C326.481 26.3896 326.36 26.0508 326.36 25.6302H324.906ZM327.408 28.8637C328.841 29.446 331.096 30.0326 334.133 30.6314L334.414 29.205C331.392 28.6091 329.252 28.0437 327.955 27.5167L327.408 28.8637ZM334.127 30.6304C337.65 31.3519 340.515 32.1117 342.732 32.9065L343.223 31.5379C340.917 30.7114 337.979 29.9352 334.419 29.206L334.127 30.6304ZM342.747 32.9118C344.936 33.6415 346.841 34.8559 348.467 36.5635L349.52 35.5608C347.733 33.6845 345.626 32.3389 343.207 31.5325L342.747 32.9118ZM348.467 36.5635C350.019 38.1928 350.85 40.4332 350.89 43.3683L352.344 43.3481C352.3 40.1392 351.381 37.5156 349.52 35.5608L348.467 36.5635ZM350.89 43.3582C350.89 48.3811 349.194 51.9967 345.884 54.3497L346.726 55.5347C350.499 52.853 352.344 48.7459 352.344 43.3582H350.89ZM345.881 54.3521C342.544 56.7531 338.016 57.9912 332.225 57.9912V59.4451C338.211 59.4451 343.07 58.1659 346.73 55.5323L345.881 54.3521ZM332.225 57.9912C325.423 57.9912 320.217 56.8481 316.535 54.6388L315.787 55.8856C319.785 58.2843 325.289 59.4451 332.225 59.4451V57.9912ZM316.538 54.6407C313.026 52.5097 311.192 48.7205 311.192 43.0382H309.738C309.738 49.0466 311.702 53.4067 315.784 55.8837L316.538 54.6407ZM310.465 43.7651H323.841V42.3112H310.465V43.7651ZM323.114 43.0382C323.114 45.3492 323.712 47.1539 325.166 48.1231L325.973 46.9133C325.122 46.3465 324.568 45.1646 324.568 43.0382H323.114ZM325.182 48.1334C326.509 48.9692 328.47 49.3331 330.945 49.3331V47.8792C328.557 47.8792 326.933 47.5178 325.957 46.903L325.182 48.1334ZM330.945 49.3331C332.782 49.3331 334.339 49.1373 335.591 48.7198L335.131 47.3405C334.08 47.6911 332.693 47.8792 330.945 47.8792V49.3331ZM335.584 48.7223C336.285 48.4968 336.875 48.1311 337.285 47.5889C337.698 47.0435 337.88 46.3842 337.88 45.6622H336.426C336.426 46.1348 336.31 46.4676 336.126 46.7115C335.939 46.9586 335.632 47.1796 335.139 47.3381L335.584 48.7223ZM337.88 45.6622C337.88 44.9648 337.659 44.3339 337.215 43.8033C336.781 43.2857 336.166 42.9007 335.432 42.6163L334.907 43.9721C335.495 44.1997 335.872 44.4654 336.1 44.7371C336.317 44.9958 336.426 45.2929 336.426 45.6622H337.88ZM335.458 42.6272C334.104 42.0403 331.928 41.4524 328.978 40.8538L328.689 42.2786C331.626 42.8747 333.675 43.4388 334.88 43.9612L335.458 42.6272ZM328.986 40.8554C325.418 40.0909 322.484 39.3088 320.175 38.5111L319.7 39.8853C322.084 40.7089 325.08 41.5054 328.681 42.277L328.986 40.8554ZM320.186 38.515C317.954 37.7035 316.004 36.3853 314.331 34.5486L313.256 35.5278C315.081 37.5311 317.227 38.9862 319.689 39.8814L320.186 38.515ZM314.331 34.5486C312.733 32.7952 311.896 30.3842 311.896 27.2302H310.442C310.442 30.6469 311.355 33.4412 313.256 35.5278L314.331 34.5486ZM311.896 27.2302C311.896 22.6293 313.647 19.34 317.115 17.227L316.359 15.9854C312.404 18.395 310.442 22.1884 310.442 27.2302H311.896ZM317.117 17.2258C320.728 15.01 325.323 13.8771 330.945 13.8771V12.4232C325.133 12.4232 320.256 13.5944 316.357 15.9866L317.117 17.2258Z"
                fill="black"
                mask="url(#path-4-outside-1_1239_3874)"
              />
              <mask
                id="path-6-outside-2_1239_3874"
                maskUnits="userSpaceOnUse"
                x="161.512"
                y="10"
                width="189"
                height="56"
                fill="black"
              >
                <rect fill="white" x="161.512" y="10" width="189" height="56" />
                <path d="M162.248 11.968H197.832V22.528H176.392V30.08H194.824V40.192H176.392V56H162.248V11.968ZM231.639 56L229.783 49.792H214.359L212.503 56H198.039L214.103 11.968H230.551L246.615 56H231.639ZM217.303 39.936H226.839L222.231 24.256H221.975L217.303 39.936ZM252.104 33.984C252.104 26.5173 254.152 20.864 258.248 17.024C262.387 13.1413 268.254 11.2 275.848 11.2C283.443 11.2 289.31 13.1413 293.448 17.024C297.587 20.9067 299.656 26.56 299.656 33.984C299.656 38.9333 298.718 43.1147 296.84 46.528C295.006 49.8987 292.318 52.4587 288.776 54.208L298.824 64.384H281.992L275.208 56.768C267.784 56.64 262.067 54.656 258.056 50.816C254.088 46.9333 252.104 41.3227 252.104 33.984ZM285.192 31.936C285.192 28.8213 284.382 26.3467 282.76 24.512C281.182 22.6773 278.878 21.76 275.848 21.76C272.819 21.76 270.515 22.6773 268.936 24.512C267.358 26.3467 266.568 28.8213 266.568 31.936V36.032C266.568 39.1467 267.358 41.6213 268.936 43.456C270.515 45.2907 272.819 46.208 275.848 46.208C278.878 46.208 281.182 45.2907 282.76 43.456C284.382 41.6213 285.192 39.1467 285.192 36.032V31.936ZM328.969 11.2C334.601 11.2 339.23 12.352 342.857 14.656C346.483 16.9173 348.339 20.288 348.425 24.768V25.536H335.177V25.28C335.177 24 334.707 22.9333 333.769 22.08C332.83 21.2267 331.401 20.8 329.481 20.8C327.603 20.8 326.153 21.0773 325.129 21.632C324.147 22.1867 323.657 22.8693 323.657 23.68C323.657 24.832 324.339 25.6853 325.705 26.24C327.07 26.7947 329.267 27.3707 332.297 27.968C335.838 28.6933 338.739 29.4613 341.001 30.272C343.305 31.04 345.31 32.32 347.017 34.112C348.723 35.904 349.598 38.336 349.641 41.408C349.641 46.6133 347.87 50.4747 344.329 52.992C340.83 55.5093 336.137 56.768 330.249 56.768C323.379 56.768 318.025 55.616 314.185 53.312C310.387 51.008 308.489 46.9333 308.489 41.088H321.865C321.865 43.3067 322.441 44.8 323.593 45.568C324.745 46.2933 326.537 46.656 328.969 46.656C330.761 46.656 332.233 46.464 333.385 46.08C334.579 45.696 335.177 44.9067 335.177 43.712C335.177 42.6453 334.515 41.856 333.193 41.344C331.913 40.7893 329.801 40.2133 326.857 39.616C323.273 38.848 320.307 38.0587 317.961 37.248C315.614 36.3947 313.566 35.008 311.817 33.088C310.067 31.168 309.193 28.5653 309.193 25.28C309.193 20.4587 311.049 16.9173 314.761 14.656C318.515 12.352 323.251 11.2 328.969 11.2Z" />
              </mask>
              <path
                d="M162.248 11.968H197.832V22.528H176.392V30.08H194.824V40.192H176.392V56H162.248V11.968ZM231.639 56L229.783 49.792H214.359L212.503 56H198.039L214.103 11.968H230.551L246.615 56H231.639ZM217.303 39.936H226.839L222.231 24.256H221.975L217.303 39.936ZM252.104 33.984C252.104 26.5173 254.152 20.864 258.248 17.024C262.387 13.1413 268.254 11.2 275.848 11.2C283.443 11.2 289.31 13.1413 293.448 17.024C297.587 20.9067 299.656 26.56 299.656 33.984C299.656 38.9333 298.718 43.1147 296.84 46.528C295.006 49.8987 292.318 52.4587 288.776 54.208L298.824 64.384H281.992L275.208 56.768C267.784 56.64 262.067 54.656 258.056 50.816C254.088 46.9333 252.104 41.3227 252.104 33.984ZM285.192 31.936C285.192 28.8213 284.382 26.3467 282.76 24.512C281.182 22.6773 278.878 21.76 275.848 21.76C272.819 21.76 270.515 22.6773 268.936 24.512C267.358 26.3467 266.568 28.8213 266.568 31.936V36.032C266.568 39.1467 267.358 41.6213 268.936 43.456C270.515 45.2907 272.819 46.208 275.848 46.208C278.878 46.208 281.182 45.2907 282.76 43.456C284.382 41.6213 285.192 39.1467 285.192 36.032V31.936ZM328.969 11.2C334.601 11.2 339.23 12.352 342.857 14.656C346.483 16.9173 348.339 20.288 348.425 24.768V25.536H335.177V25.28C335.177 24 334.707 22.9333 333.769 22.08C332.83 21.2267 331.401 20.8 329.481 20.8C327.603 20.8 326.153 21.0773 325.129 21.632C324.147 22.1867 323.657 22.8693 323.657 23.68C323.657 24.832 324.339 25.6853 325.705 26.24C327.07 26.7947 329.267 27.3707 332.297 27.968C335.838 28.6933 338.739 29.4613 341.001 30.272C343.305 31.04 345.31 32.32 347.017 34.112C348.723 35.904 349.598 38.336 349.641 41.408C349.641 46.6133 347.87 50.4747 344.329 52.992C340.83 55.5093 336.137 56.768 330.249 56.768C323.379 56.768 318.025 55.616 314.185 53.312C310.387 51.008 308.489 46.9333 308.489 41.088H321.865C321.865 43.3067 322.441 44.8 323.593 45.568C324.745 46.2933 326.537 46.656 328.969 46.656C330.761 46.656 332.233 46.464 333.385 46.08C334.579 45.696 335.177 44.9067 335.177 43.712C335.177 42.6453 334.515 41.856 333.193 41.344C331.913 40.7893 329.801 40.2133 326.857 39.616C323.273 38.848 320.307 38.0587 317.961 37.248C315.614 36.3947 313.566 35.008 311.817 33.088C310.067 31.168 309.193 28.5653 309.193 25.28C309.193 20.4587 311.049 16.9173 314.761 14.656C318.515 12.352 323.251 11.2 328.969 11.2Z"
                fill="#D03441"
              />
              <path
                d="M162.248 11.968V11.241H161.521V11.968H162.248ZM197.832 11.968H198.559V11.241H197.832V11.968ZM197.832 22.528V23.255H198.559V22.528H197.832ZM176.392 22.528V21.801H175.665V22.528H176.392ZM176.392 30.08H175.665V30.8069H176.392V30.08ZM194.824 30.08H195.551V29.353H194.824V30.08ZM194.824 40.192V40.9189H195.551V40.192H194.824ZM176.392 40.192V39.465H175.665V40.192H176.392ZM176.392 56V56.727H177.119V56H176.392ZM162.248 56H161.521V56.727H162.248V56ZM162.248 12.6949H197.832V11.241H162.248V12.6949ZM197.105 11.968V22.528H198.559V11.968H197.105ZM197.832 21.801H176.392V23.255H197.832V21.801ZM175.665 22.528V30.08H177.119V22.528H175.665ZM176.392 30.8069H194.824V29.353H176.392V30.8069ZM194.097 30.08V40.192H195.551V30.08H194.097ZM194.824 39.465H176.392V40.9189H194.824V39.465ZM175.665 40.192V56H177.119V40.192H175.665ZM176.392 55.273H162.248V56.727H176.392V55.273ZM162.975 56V11.968H161.521V56H162.975ZM231.639 56L230.943 56.2082L231.098 56.727H231.639V56ZM229.783 49.792L230.48 49.5838L230.325 49.065H229.783V49.792ZM214.359 49.792V49.065H213.818L213.663 49.5838L214.359 49.792ZM212.503 56V56.727H213.045L213.2 56.2082L212.503 56ZM198.039 56L197.356 55.7509L197 56.727H198.039V56ZM214.103 11.968V11.241H213.595L213.42 11.7189L214.103 11.968ZM230.551 11.968L231.234 11.7189L231.06 11.241H230.551V11.968ZM246.615 56V56.727H247.654L247.298 55.7509L246.615 56ZM217.303 39.936L216.607 39.7284L216.328 40.6629H217.303V39.936ZM226.839 39.936V40.6629H227.811L227.537 39.731L226.839 39.936ZM222.231 24.256L222.929 24.051L222.775 23.529H222.231V24.256ZM221.975 24.256V23.529H221.433L221.279 24.0484L221.975 24.256ZM232.336 55.7918L230.48 49.5838L229.087 50.0002L230.943 56.2082L232.336 55.7918ZM229.783 49.065H214.359V50.519H229.783V49.065ZM213.663 49.5838L211.807 55.7918L213.2 56.2082L215.056 50.0002L213.663 49.5838ZM212.503 55.273H198.039V56.727H212.503V55.273ZM198.722 56.2491L214.786 12.2171L213.42 11.7189L197.356 55.7509L198.722 56.2491ZM214.103 12.6949H230.551V11.241H214.103V12.6949ZM229.868 12.2171L245.932 56.2491L247.298 55.7509L231.234 11.7189L229.868 12.2171ZM246.615 55.273H231.639V56.727H246.615V55.273ZM217.303 40.6629H226.839V39.209H217.303V40.6629ZM227.537 39.731L222.929 24.051L221.534 24.461L226.142 40.141L227.537 39.731ZM222.231 23.529H221.975V24.983H222.231V23.529ZM221.279 24.0484L216.607 39.7284L218 40.1436L222.672 24.4636L221.279 24.0484ZM258.248 17.024L258.745 17.5543L258.746 17.5542L258.248 17.024ZM296.84 46.528L296.203 46.1777L296.202 46.1805L296.84 46.528ZM288.776 54.208L288.454 53.5562L287.551 54.0022L288.259 54.7188L288.776 54.208ZM298.824 64.384V65.111H300.564L299.341 63.8732L298.824 64.384ZM281.992 64.384L281.449 64.8675L281.666 65.111H281.992V64.384ZM275.208 56.768L275.751 56.2845L275.539 56.0466L275.221 56.0412L275.208 56.768ZM258.056 50.816L257.548 51.3356L257.553 51.3411L258.056 50.816ZM282.76 24.512L282.209 24.9862L282.215 24.9934L282.76 24.512ZM268.936 24.512L269.487 24.9861L268.936 24.512ZM282.76 43.456L282.215 42.9746L282.209 42.9818L282.76 43.456ZM252.831 33.984C252.831 26.649 254.84 21.2158 258.745 17.5543L257.751 16.4937C253.465 20.5122 251.377 26.3856 251.377 33.984H252.831ZM258.746 17.5542C262.709 13.8357 268.374 11.9269 275.848 11.9269V10.473C268.133 10.473 262.065 12.4469 257.751 16.4938L258.746 17.5542ZM275.848 11.9269C283.322 11.9269 288.987 13.8357 292.951 17.5542L293.946 16.4938C289.632 12.4469 283.564 10.473 275.848 10.473V11.9269ZM292.951 17.5542C296.902 21.2605 298.929 26.6958 298.929 33.984H300.383C300.383 26.4242 298.272 20.5529 293.946 16.4938L292.951 17.5542ZM298.929 33.984C298.929 38.8433 298.008 42.8969 296.203 46.1777L297.477 46.8783C299.427 43.3324 300.383 39.0234 300.383 33.984H298.929ZM296.202 46.1805C294.441 49.4155 291.865 51.8712 288.454 53.5562L289.098 54.8598C292.77 53.0461 295.57 50.3819 297.479 46.8755L296.202 46.1805ZM288.259 54.7188L298.307 64.8948L299.341 63.8732L289.294 53.6972L288.259 54.7188ZM298.824 63.6571H281.992V65.111H298.824V63.6571ZM282.535 63.9005L275.751 56.2845L274.665 57.2515L281.449 64.8675L282.535 63.9005ZM275.221 56.0412C267.917 55.9152 262.398 53.9667 258.559 50.2909L257.553 51.3411C261.736 55.3453 267.652 57.3648 275.196 57.4948L275.221 56.0412ZM258.565 50.2964C254.777 46.5903 252.831 41.1926 252.831 33.984H251.377C251.377 41.4528 253.399 47.2763 257.548 51.3356L258.565 50.2964ZM285.919 31.936C285.919 28.6938 285.073 26.0312 283.305 24.0306L282.215 24.9934C283.69 26.6621 284.465 28.9489 284.465 31.936H285.919ZM283.311 24.0379C281.561 22.0036 279.032 21.033 275.848 21.033V22.4869C278.723 22.4869 280.802 23.351 282.209 24.9861L283.311 24.0379ZM275.848 21.033C272.665 21.033 270.136 22.0036 268.385 24.0379L269.487 24.9861C270.894 23.351 272.973 22.4869 275.848 22.4869V21.033ZM268.385 24.0379C266.664 26.0386 265.841 28.6984 265.841 31.936H267.295C267.295 28.9443 268.051 26.6548 269.487 24.9861L268.385 24.0379ZM265.841 31.936V36.032H267.295V31.936H265.841ZM265.841 36.032C265.841 39.2696 266.664 41.9294 268.385 43.9301L269.487 42.9818C268.051 41.3132 267.295 39.0237 267.295 36.032H265.841ZM268.385 43.9301C270.136 45.9644 272.665 46.935 275.848 46.935V45.481C272.973 45.481 270.894 44.617 269.487 42.9818L268.385 43.9301ZM275.848 46.935C279.032 46.935 281.561 45.9644 283.311 43.9301L282.209 42.9818C280.802 44.617 278.723 45.481 275.848 45.481V46.935ZM283.305 43.9374C285.073 41.9368 285.919 39.2742 285.919 36.032H284.465C284.465 39.0191 283.69 41.3059 282.215 42.9746L283.305 43.9374ZM285.919 36.032V31.936H284.465V36.032H285.919ZM342.857 14.656L342.467 15.2696L342.472 15.2729L342.857 14.656ZM348.425 24.768H349.152L349.152 24.7542L348.425 24.768ZM348.425 25.536V26.263H349.152V25.536H348.425ZM335.177 25.536H334.45V26.263H335.177V25.536ZM333.769 22.08L334.258 21.5421L333.769 22.08ZM325.129 21.632L324.782 20.9927L324.771 20.9991L325.129 21.632ZM325.705 26.24L325.978 25.5665L325.705 26.24ZM332.297 27.968L332.443 27.2558L332.437 27.2548L332.297 27.968ZM341.001 30.272L340.755 30.9563L340.763 30.9591L340.771 30.9616L341.001 30.272ZM349.641 41.408H350.368L350.368 41.3979L349.641 41.408ZM344.329 52.992L343.908 52.3995L343.904 52.4019L344.329 52.992ZM314.185 53.312L313.808 53.9335L313.811 53.9354L314.185 53.312ZM308.489 41.088V40.361H307.762V41.088H308.489ZM321.865 41.088H322.592V40.361H321.865V41.088ZM323.593 45.568L323.189 46.1729L323.197 46.1781L323.205 46.1832L323.593 45.568ZM333.385 46.08L333.162 45.3879L333.155 45.3904L333.385 46.08ZM333.193 41.344L332.904 42.011L332.917 42.0167L332.93 42.0219L333.193 41.344ZM326.857 39.616L326.704 40.3269L326.712 40.3284L326.857 39.616ZM317.961 37.248L317.712 37.9313L317.723 37.9351L317.961 37.248ZM311.817 33.088L311.279 33.5776L311.817 33.088ZM314.761 14.656L315.139 15.2768L315.141 15.2756L314.761 14.656ZM328.969 11.9269C334.505 11.9269 338.988 13.0594 342.467 15.2696L343.247 14.0424C339.472 11.6446 334.697 10.473 328.969 10.473V11.9269ZM342.472 15.2729C345.878 17.3966 347.617 20.5335 347.698 24.7818L349.152 24.7542C349.062 20.0425 347.089 16.438 343.241 14.0391L342.472 15.2729ZM347.698 24.768V25.536H349.152V24.768H347.698ZM348.425 24.809H335.177V26.263H348.425V24.809ZM335.904 25.536V25.28H334.45V25.536H335.904ZM335.904 25.28C335.904 23.7973 335.35 22.5346 334.258 21.5421L333.28 22.6179C334.065 23.332 334.45 24.2027 334.45 25.28H335.904ZM334.258 21.5421C333.131 20.5177 331.491 20.073 329.481 20.073V21.527C331.31 21.527 332.529 21.9356 333.28 22.6179L334.258 21.5421ZM329.481 20.073C327.549 20.073 325.959 20.3556 324.782 20.9928L325.475 22.2712C326.347 21.7991 327.658 21.527 329.481 21.527V20.073ZM324.771 20.9991C323.662 21.6261 322.93 22.5094 322.93 23.68H324.384C324.384 23.2292 324.633 22.7472 325.486 22.2649L324.771 20.9991ZM322.93 23.68C322.93 24.4114 323.151 25.0752 323.601 25.6381C324.042 26.1899 324.672 26.605 325.431 26.9135L325.978 25.5665C325.372 25.3203 324.978 25.0315 324.736 24.7299C324.504 24.4394 324.384 24.1006 324.384 23.68H322.93ZM325.431 26.9135C326.865 27.4958 329.119 28.0824 332.156 28.6812L332.437 27.2548C329.415 26.6589 327.276 26.0935 325.978 25.5665L325.431 26.9135ZM332.151 28.6802C335.673 29.4017 338.538 30.1615 340.755 30.9563L341.246 29.5877C338.94 28.7612 336.003 27.985 332.443 27.2558L332.151 28.6802ZM340.771 30.9616C342.96 31.6913 344.864 32.9057 346.49 34.6133L347.543 33.6107C345.756 31.7343 343.65 30.3887 341.231 29.5824L340.771 30.9616ZM346.49 34.6133C348.042 36.2426 348.873 38.483 348.914 41.4181L350.368 41.3979C350.323 38.189 349.405 35.5654 347.543 33.6107L346.49 34.6133ZM348.914 41.408C348.914 46.4309 347.218 50.0465 343.908 52.3995L344.75 53.5845C348.523 50.9028 350.368 46.7957 350.368 41.408H348.914ZM343.904 52.4019C340.567 54.8029 336.039 56.041 330.249 56.041V57.4949C336.234 57.4949 341.093 56.2157 344.753 53.5821L343.904 52.4019ZM330.249 56.041C323.446 56.041 318.241 54.8979 314.559 52.6886L313.811 53.9354C317.809 56.3341 323.312 57.4949 330.249 57.4949V56.041ZM314.562 52.6905C311.05 50.5595 309.216 46.7703 309.216 41.088H307.762C307.762 47.0964 309.725 51.4565 313.808 53.9335L314.562 52.6905ZM308.489 41.8149H321.865V40.361H308.489V41.8149ZM321.138 41.088C321.138 43.399 321.736 45.2037 323.189 46.1729L323.996 44.9631C323.146 44.3963 322.592 43.2144 322.592 41.088H321.138ZM323.205 46.1832C324.533 47.019 326.493 47.3829 328.969 47.3829V45.929C326.58 45.929 324.957 45.5676 323.98 44.9528L323.205 46.1832ZM328.969 47.3829C330.805 47.3829 332.362 47.1871 333.615 46.7696L333.155 45.3904C332.103 45.7409 330.716 45.929 328.969 45.929V47.3829ZM333.607 46.7721C334.309 46.5466 334.898 46.1809 335.308 45.6387C335.721 45.0933 335.904 44.434 335.904 43.712H334.45C334.45 44.1846 334.334 44.5174 334.149 44.7613C333.962 45.0084 333.656 45.2294 333.162 45.3879L333.607 46.7721ZM335.904 43.712C335.904 43.0146 335.682 42.3837 335.238 41.8531C334.804 41.3355 334.19 40.9505 333.455 40.6661L332.93 42.0219C333.518 42.2495 333.896 42.5152 334.124 42.7869C334.34 43.0457 334.45 43.3427 334.45 43.712H335.904ZM333.482 40.677C332.127 40.0901 329.952 39.5022 327.001 38.9036L326.712 40.3284C329.65 40.9245 331.698 41.4886 332.904 42.011L333.482 40.677ZM327.009 38.9052C323.442 38.1407 320.507 37.3586 318.198 36.5609L317.723 37.9351C320.108 38.7587 323.104 39.5553 326.704 40.3268L327.009 38.9052ZM318.209 36.5648C315.978 35.7533 314.027 34.4351 312.354 32.5984L311.279 33.5776C313.105 35.5809 315.251 37.036 317.712 37.9312L318.209 36.5648ZM312.354 32.5984C310.757 30.845 309.92 28.434 309.92 25.28H308.466C308.466 28.6967 309.378 31.491 311.279 33.5776L312.354 32.5984ZM309.92 25.28C309.92 20.6791 311.67 17.3898 315.139 15.2768L314.383 14.0352C310.427 16.4448 308.466 20.2382 308.466 25.28H309.92ZM315.141 15.2756C318.752 13.0598 323.346 11.9269 328.969 11.9269V10.473C323.156 10.473 318.279 11.6442 314.381 14.0364L315.141 15.2756Z"
                fill="black"
                mask="url(#path-6-outside-2_1239_3874)"
              />
              <path
                d="M491.389 59.4751H511.33L488.052 35.9666L511.33 12.4751H491.389L468.094 35.9666L491.389 59.4751Z"
                fill="#BF2E2E"
              />
              <path
                d="M446.579 59.4751H466.536L443.241 35.9666L466.536 12.4751H446.579L423.283 35.9666L446.579 59.4751Z"
                fill="#BF2E2E"
              />
              <path
                d="M401.784 59.4751H421.741L398.446 35.9666L421.741 12.4751H401.784L378.488 35.9666L401.784 59.4751Z"
                fill="#BF2E2E"
              />
            </svg>
          </div>
          <div className="w-full h-6"></div>

          {accordionData.map((data, index) => (
            <Accordion
              key={index}
              question={data.question}
              isOpen={openIndex === index}
              toggleAccordion={() => toggleAccordion(index)}
              answer={data.answer}
            />
          ))}
        </div>
      </div>
      <div className="w-1/6 h-[240vh] flex flex-col justify-center items-center">
        <svg
         className="w-2/5 h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md"
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 85 85"
          fill="none"
        >
          <path
            d="M85 15.9892C76.1693 15.9892 69.0108 8.83068 69.0108 0H63.75H58.4892C58.4892 8.83068 51.3307 15.9892 42.5 15.9892C33.6693 15.9892 26.5108 8.83068 26.5108 0H21.25H15.9892C15.9892 8.83068 8.83068 15.9892 0 15.9892V21.25V26.5108C8.83068 26.5108 15.9892 33.6693 15.9892 42.5C15.9892 51.3307 8.83068 58.4892 0 58.4892V63.75V69.0108C8.83068 69.0108 15.9892 76.1693 15.9892 85H21.25H26.5108C26.5108 76.1693 33.6693 69.0108 42.5 69.0108C51.3307 69.0108 58.4892 76.1693 58.4892 85H63.75H69.0108C69.0108 76.1693 76.1693 69.0108 85 69.0108V63.75V58.4892C76.1693 58.4892 69.0108 51.3307 69.0108 42.5C69.0108 33.6693 76.1693 26.5108 85 26.5108V21.25V15.9892ZM58.4892 42.5C58.4892 51.3307 51.3307 58.4892 42.5 58.4892C33.6693 58.4892 26.5108 51.3307 26.5108 42.5C26.5108 33.6693 33.6693 26.5108 42.5 26.5108C51.3307 26.5108 58.4892 33.6693 58.4892 42.5Z"
            fill="#E16C00"
          />
        </svg>
      </div>
    </div>
  );
}