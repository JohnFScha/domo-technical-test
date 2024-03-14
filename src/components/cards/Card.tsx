import { CgCopy } from "react-icons/cg";
import { FaComputer } from "react-icons/fa6";
import { TfiRulerPencil } from "react-icons/tfi";

const cards = [
  {
    id: 1,
    icon: <CgCopy className="text-white w-7 h-7" />,
    title: "Business & Product Concept",
    text: "Analyse business and product concepts at Start-up Workshops or Ongoing Projects' Audits and prepare a viable an sensible product roadmap for achieving a perfect market fit."
  },
  {
    id: 2,
    icon: <FaComputer className="text-white w-7 h-7" />,
    title: "Web & Mobile Development",
    text: "Plan, develop and test high-quality web-applications using AngularJS, NodeJS, JavaScript, TypeScript, HTML5 and SASS/CSS3 frameworks and native mobile languages."
  },
  {
    id: 3,
    icon: <TfiRulerPencil className="text-white w-7 h-7" />,
    title: "UX & UI Design",
    text: "Sketch information architecture and simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good and reliable user experience."
  }
]

export default cards