import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function EducationCards(props) {
  return (
    <Card className="education-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        {/* <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> */}
        {/* {"\n"} */}
        {/* {"\n"} */}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )} */}
      </Card.Body>
    </Card>
  );
}
export default EducationCards;
// import React, { createRef, useContext } from "react";
// import { Fade, Slide } from "react-reveal";
// import "./Education/EducationCard";
// import StyleContext from "../../contexts/StyleContext";

// export default function EducationCard({ school }) {
//   const imgRef = createRef();

//   const GetDescBullets = ({ descBullets }) => {
//     return descBullets
//       ? descBullets.map((item, i) => (
//         <li key={i} className="subTitle">
//           {item}
//         </li>
//       ))
//       : null;
//   };
//   const { isDark } = useContext(StyleContext);

//   if (!school.logo)
//     console.error(`Image of ${school.name} is missing in education section`);
//   return (
//     <div>
//       <Fade left duration={1000}>
//         <div className="education-card">
//           {school.logo && (
//             <div className="education-card-left">
//               <img
//                 crossOrigin={"anonymous"}
//                 ref={imgRef}
//                 className="education-roundedimg"
//                 src={school.logo}
//                 alt={school.schoolName}
//               />
//             </div>
//           )}
//           <div className="education-card-right">
//             <h5 className="education-text-school">{school.schoolName}</h5>

//             <div className="education-text-details">
//               <h5
//                 className={
//                   isDark
//                     ? "dark-mode education-text-subHeader"
//                     : "education-text-subHeader"
//                 }
//               >
//                 {school.subHeader}
//               </h5>
//               <p
//                 className={`${isDark ? "dark-mode" : ""
//                   } education-text-duration`}
//               >
//                 {school.duration}
//               </p>
//               <p className="education-text-desc">{school.desc}</p>
//               <div className="education-text-bullets">
//                 <ul>
//                   <GetDescBullets descBullets={school.descBullets} />
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Fade>
//       <Slide left duration={2000}>
//         <div className="education-card-border"></div>
//       </Slide>
//     </div>
//   );
// }