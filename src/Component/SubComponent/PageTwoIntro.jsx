import React from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Carousel } from "primereact/carousel";
import { Image } from "primereact/image";
// Uploaded Images
import myPic from "../../images/mypic2.png";

import {
  c_plus_plus,
  html5,
  cssSolo,
  djPython,
  djUdemy,
  htmlSolo,
  jQuerySolo,
  jsSolo,
  phpSolo,
  pythonHacker,
  pythonSolo,
  python3,
  reactHacker,
  sqlSolo,
  fullStackUdemy,
  reactJS,
  django,
  python,
  docker,
  html,
  css,
  bootstrap,
  drf_logo,
  pgadmin,
  graphql,
  js,
  react_saga,
  apolloGraphql,
  nodeJs,
} from "../../helper/common-images";

const PageTwoIntro = () => {
  const certificates = [
    { src: pythonHacker, alt: "Certificate 1" },
    { src: reactHacker, alt: "Certificate 2" },
    { src: apolloGraphql, alt: "Certificate 3" },
    { src: djPython, alt: "Certificate 4" },
    { src: djUdemy, alt: "Certificate 5" },
    { src: nodeJs, alt: "Certificate 6" },
    { src: jQuerySolo, alt: "Certificate 7" },
    { src: jsSolo, alt: "Certificate 8" },
    { src: phpSolo, alt: "Certificate 9" },
    { src: c_plus_plus, alt: "Certificate 10" },
    { src: pythonSolo, alt: "Certificate 11" },
    { src: python3, alt: "Certificate 12" },
    { src: html5, alt: "Certificate 13" },
    { src: sqlSolo, alt: "Certificate 14" },
    { src: fullStackUdemy, alt: "Certificate 15" },
    { src: cssSolo, alt: "Certificate 16" },
    { src: htmlSolo, alt: "Certificate 17" },
  ];

  const renderCarouselItem = (certificate) => {
    return (
      <div className="py-2">
        <Image
          src={certificate.src}
          preview
          width="200"
          alt={certificate.alt}
          imageClassName="rounded"
        />
      </div>
    );
  };
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  return (
    <div className="flex flex-col h-screen bg-white pb-4">
      <div className="h-10 mt-16 flex justify-center mb-1"></div>
      <div className="flex-1">
        <Splitter className="w-full h-full">
          <SplitterPanel className="flex justify-center">
            <div className=" mx-10 ml-14">
              <Image
                src={myPic}
                preview
                alt="Image"
                width="300"
                className="flex justify-center"
                imageClassName=" flex justify-center"
              />
              <div className="">
                <p className=" text-zinc-500">Who's this guy?</p>
                <p>
                  With over three years of professional experience under my
                  belt, I've become a proficient full stack engineer,
                  well-versed in an array of stacks encompassing both frontend
                  and backend development. My journey from student to seasoned
                  developer has equipped me with a diverse skill set and a deep
                  understanding of web technologies. Specializing in crafting
                  dynamic and responsive websites, I excel in building intuitive
                  user interfaces and implementing innovative features that
                  enhance user experience.
                </p>
              </div>
            </div>
          </SplitterPanel>
          <SplitterPanel className="mb-3">
            <div className="flex flex-wrap">
              <div className="flex justify-center h-12 mb-3 w-full">
                <p className=" text-2xl !h-6 font-sans font-semibold">
                  Technologies I've Worked With
                </p>
              </div>
              <div className="w-full h-full mx-5">
                <div className="grid grid-cols-4 gap-0">
                  <div className="flex flex-col justify-center items-center shadow-md m-2 rounded-lg">
                    <Image
                      src={reactJS}
                      alt="Image"
                      width="50"
                      preview
                      imageClassName="!rounded-full"
                    />
                    <div className="mt-2 text-1xl font-sans font-semibold text-center ">
                      React JS
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center shadow-md m-2">
                    <Image
                      src={python}
                      alt="Image"
                      width="50"
                      preview
                      imageClassName="!rounded-full"
                    />
                    <div className="mt-2 text-1xl font-sans font-semibold text-center">
                      Python
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center shadow-md m-2 rounded-lg ">
                    <Image
                      src={js}
                      alt="Image"
                      width="50"
                      preview
                      imageClassName="!rounded-full"
                    />
                    <div className="mt-2 text-center font-sans font-semibold">
                      JavaScript
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center shadow-md m-2 rounded-lg ">
                    <Image
                      src={django}
                      alt="Image"
                      width="90"
                      preview
                      imageClassName="rounded-full"
                    />
                    <div className="mt-2 text-1xl font-sans font-semibold text-center">
                      Django
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center shadow-md m-2 rounded-lg ">
                    <Image
                      src={html}
                      alt="Image"
                      width="50"
                      preview
                      imageClassName="!rounded-full"
                    />
                    <div className="mt-2 text-center">Html</div>
                  </div>
                  <div className="flex flex-col justify-center items-center  shadow-md mt-3 m-2 rounded-lg">
                    <Image
                      src={css}
                      alt="Image"
                      width="70"
                      preview
                      imageClassName="!rounded-full"
                    />
                    <div className="mt-2 text-center font-sans font-semibold">
                      Css
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center shadow-md mt-3 m-2 rounded-lg">
                    <Image
                      src={react_saga}
                      alt="Image"
                      width="60"
                      preview
                      imageClassName="!rounded-full"
                    />
                    <div className="mt-2 text-1xl font-sans font-semibold text-center">
                      Redux & Saga
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center shadow-md mt-3 m-2 rounded-lg">
                    <Image
                      src={bootstrap}
                      alt="Image"
                      width="50"
                      preview
                      imageClassName="!rounded-full"
                    />
                    <div className="mt-2 text-center font-sans font-semibold">
                      Bootstrap
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center shadow-md mt-3 m-2 rounded-lg">
                    <Image
                      src={drf_logo}
                      alt="Image"
                      width="70"
                      preview
                      imageClassName="!rounded-full"
                    />
                    <div className="mt-2 text-center font-sans font-semibold">
                      Django Rest Framework
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center shadow-md mt-3 m-2 rounded-lg">
                    <Image
                      src={docker}
                      alt="Image"
                      width="50"
                      preview
                      imageClassName="!rounded-full mt-2 text-sm"
                    />
                    <div className="mt-2 text-center  font-sans font-semibold">
                      Docker
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center shadow-md mt-3 m-2 rounded-lg">
                    <Image
                      src={graphql}
                      alt="Image"
                      width="50"
                      preview
                      imageClassName="!rounded-full"
                    />
                    <div className="mt-2 text-center justify-center font-sans font-semibold">
                      GraphQl
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center shadow-md mt-3 m-2 rounded-lg">
                    <Image
                      src={pgadmin}
                      alt="Image"
                      width="70"
                      preview
                      imageClassName="!rounded-full"
                    />
                    <div className="mt-2 text-center font-sans font-semibold">
                      PostgreSQL
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
      <div className="h-60 w-full mt-3">
        <h3 className="flex text-2xl font-sans font-semibold justify-center">
          Certificates
        </h3>
        <div className="card pt-2 mx-5 mb-3">
          <Carousel
            value={certificates}
            autoplayInterval={3000}
            numVisible={5}
            numScroll={2}
            responsiveOptions={responsiveOptions}
            itemTemplate={renderCarouselItem}
          />
        </div>
      </div>
    </div>
  );
};

export default PageTwoIntro;
