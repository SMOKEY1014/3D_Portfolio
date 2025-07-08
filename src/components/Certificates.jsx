import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
// Removed github icon
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants"; // You’ll need to create this
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({
  index,
  name,
  description,
  tags,
  image,
  certificate_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="certificate_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(certificate_link, "_blank")}
              className="green-pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <span className="text-white text-xl font-bold">🔗</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following certificates highlight my knowledge, dedication, and achievements across various domains in tech.
          Each certification reflects my commitment to continuous learning, practical skills in cybersecurity, software engineering,
          and application development, and my ability to meet industry-recognized standards.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((certificate, index) => (
          <CertificateCard key={`cert-${index}`} index={index} {...certificate} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "");
