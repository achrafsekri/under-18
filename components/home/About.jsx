import React from "react";
import Image from "next/image";
import styles from "../../styles/main.module.css"
const About = () => {
  return (
    <div className="w-full mt-20">
      <div className="flex flex-col w-full md:flex-row" id="section1">
        <div
          id="left"
          className="flex flex-col justify-center w-full md:pr-16 md:w-1/2 md:h-96"
        >
          <h3 className="text-3xl font-bold tracking-wider uppercase">
            the <span className={styles.accenttext}>collective</span>
          </h3>
          <p className="text-xl tracking-wide capitalize">
            founded in 2022 by an aspiring rapper x who later turned out to be
            one of the biggest artists in the world be one of the biggest
            artists in the world.
          </p>
        </div>
        <div id="right" className="relative w-full mt-6 md:mb-6 md:w-1/2">
          <div className="absolute w-3/4 overflow-hidden sm:w-2/4 md:w-3/4 sm:h-40 h-36 top-3 left-3 md:h-72 ">
            <Image
              src="https://s3-alpha-sig.figma.com/img/c4e4/db09/1aaceed2d8c41459db08bad445b80f23?Expires=1662940800&Signature=EwjWDMcuRkDwoc8KmRPAmRGt0ITfDrJeEJj3WAUVyspO~BwJskVz386nzY7kILC-5VC1sZlJ2XWHXFnX5oLx6kWDx~hMtXH7aUxVyZhozO595N11n0JvY6YpDgI-jjNTk-DsJh~r9FP3Lc~Ec0dtzdO8NlTE0NdqGYGfYEGUYoIBl-~INfjunsxW1wudadzZ8h6p73B8OzL823IUjCT3~Fch-DDr8MqvVrYFrSuSkn4ZIAiufLeSfuXzTXTGwc725cwYhyVFEEdCQw4wTyJ057xDBhXpVKzuUKoQtM4K3EqVeFhkWK6ahYD28WLnqc5tQbr7OG37sCGAQCkqImuZJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              className="object-cover object-right-top"
              layout='fill'
            />
          </div>
          <div className="w-48 md:h-60 md:w-3/4 h-28 bg-gradient-to-br from-black to-green wide:h-72 wide:w-3/5"></div>
        </div>
      </div>
      <div className="flex flex-col w-full mt-20 md:flex-row" id="section2">
        <div
          id="left"
          className="relative hidden w-full mt-6 md:mb-6 md:w-1/2 md:inline-block"
        >
          <div className="absolute w-3/4 overflow-hidden top-3 left-3 h-72 ">
            <Image
              src="https://s3-alpha-sig.figma.com/img/f0b8/6d19/08133b402bcc4b49cfcdc7318812172f?Expires=1662940800&Signature=JURAt0AvmgEybsVU3wDBTUGvVRPcKMcXtMj4X32-jN~3vd-jaVZMDkqkmToV1bBrNV0MnJr~K2x4mbQGsf4gFm260nekpWOYfXhdb4-NcbZ1onVm~qMDJPAJwsanT3SkTPuAjj4jx5V3bDbunugXX3~izAGNUwpJyHBHqmE~8EErPRdTWJWfo80PCm1q3hm56gtYHUTDZEHm0tD~zk6xSIvG0AzFD2Y6v7ds86DZpl9nV7UJPjatsp4RICTdsFEXTfDxhc~b75cP1WrdbFIkQpAVcSzUnGpAtkE9ol9EE2uuGnRcWcSn~VasMXyQujPYEVE7BJsXm26mgDeJtKF~Mg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              className="object-cover object-center"
              layout='fill'
            />
          </div>
          <div className="w-48 md:h-60 md:w-3/4 h-28 bg-gradient-to-br from-black to-green wide:w-3/5"></div>
        </div>
        <div
          id="right"
          className="flex flex-col justify-center w-full md:pr-16 md:w-1/2 md:h-96"
        >
          <p className="text-xl tracking-wide capitalize">
            founded in 2022 by an aspiring rapper x who later turned out to be
            one of the biggest artists in the world be one of the biggest
            artists in the world in the world be one of the biggest
            artists in the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
