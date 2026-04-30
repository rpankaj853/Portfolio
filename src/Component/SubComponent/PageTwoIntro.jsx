import React, { useState } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Carousel } from "primereact/carousel";
import { Image } from "primereact/image";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
// Uploaded Images
import myPic from "../../images/mypic2.png";

import {
  c_plus_plus,
  cssSolo,
  html5,
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
  html_css,
  mongodb,
  bootstrap,
  drf_logo,
  pgadmin,
  graphql,
  js,
  react_saga,
  apolloGraphql,
  nodeJs,
  mongoDB,
  genAI,
  fastapi,
  hugging_face,
  langchain,
  aws,
  databricks,
  claudeAgentSkills,
  claudeCodeAction,
  claudeCowork,
  awsLogo,
  awsUdemy,
} from "../../helper/common-images";

const PageTwoIntro = () => {
  const [previewCert, setPreviewCert] = useState(null);
  const certificates = [
    {
      src: pythonHacker,
      alt: "Python Hacker Certificate",
      label: "Python for Pentesters – Hacker's Academy",
    },
    {
      src: reactHacker,
      alt: "React Hacker Certificate",
      label: "React – Hacker's Academy",
    },
    {
      src: apolloGraphql,
      alt: "Apollo GraphQL Certificate",
      label: "Apollo Graph Developer – Associate",
    },
    {
      src: aws,
      alt: "AWS Certificate",
      label: "AWS Certified Cloud Practitioner",
    },
    {
      src: databricks,
      alt: "Databricks Certificate",
      label: "Databricks Lakehouse Fundamentals",
    },
    {
      src: claudeAgentSkills,
      alt: "Claude Agent Skills Certificate",
      label: "Build with Claude – Agent Skills",
    },
    {
      src: claudeCodeAction,
      alt: "Claude Code in Action Certificate",
      label: "Claude Code in Action",
    },
    {
      src: claudeCowork,
      alt: "Claude Coworker Certificate",
      label: "Claude as a Coworker",
    },
    { src: mongoDB, alt: "MongoDB Certificate", label: "MongoDB Basics" },
    {
      src: djUdemy,
      alt: "Django Udemy Certificate",
      label: "Django – The Complete Web Developer (Udemy)",
    },
    {
      src: nodeJs,
      alt: "Node.js Certificate",
      label: "Node.js – The Complete Guide",
    },
    {
      src: jQuerySolo,
      alt: "jQuery Certificate",
      label: "jQuery – Solo Learn",
    },
    {
      src: jsSolo,
      alt: "JavaScript Certificate",
      label: "JavaScript – Solo Learn",
    },
    { src: phpSolo, alt: "PHP Certificate", label: "PHP – Solo Learn" },
    { src: c_plus_plus, alt: "C++ Certificate", label: "C++ – Solo Learn" },
    {
      src: pythonSolo,
      alt: "Python Solo Learn Certificate",
      label: "Python – Solo Learn",
    },
    {
      src: python3,
      alt: "Python 3 Certificate",
      label: "Python 3 – Solo Learn",
    },
    {
      src: html5,
      alt: "HTML5 Certificate",
      label: "HTML5 Application Development",
    },
    { src: sqlSolo, alt: "SQL Certificate", label: "SQL – Solo Learn" },
    {
      src: fullStackUdemy,
      alt: "Full Stack Udemy Certificate",
      label: "Full Stack Web Development Bootcamp (Udemy)",
    },
    { src: cssSolo, alt: "CSS Certificate", label: "CSS – Solo Learn" },
    { src: htmlSolo, alt: "HTML Certificate", label: "HTML – Solo Learn" },
    {
      src: djPython,
      alt: "Django Python Certificate",
      label: "Django with Python",
    },
    {
      src: genAI,
      alt: "Generative AI Certificate",
      label: "Generative AI Fundamentals",
    },
    {
      src: awsUdemy,
      alt: "AWS Udemy Certificate",
      label: "AWS – Complete Guide (Udemy)",
    },
  ];

  const handleDownload = (certificate) => {
    const link = document.createElement("a");
    link.href = certificate.src;
    link.download = `${certificate.label}.png`;
    link.click();
  };

  const renderCarouselItem = (certificate) => (
    <div
      className="py-2 cursor-pointer"
      onClick={() => setPreviewCert(certificate)}
    >
      <img
        src={certificate.src}
        alt={certificate.alt}
        width="200"
        className="rounded"
      />
    </div>
  );
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
  const technologies = [
    { src: fastapi, label: "FastAPI", width: 90 },
    { src: langchain, label: "LangChain", width: 90 },
    { src: hugging_face, label: "Hugging Face", width: 60 },
    { src: django, label: "Django", width: 90 },
    { src: python, label: "Python", width: 50 },
    { src: js, label: "JavaScript", width: 50 },
    { src: reactJS, label: "React JS", width: 50 },
    { src: html_css, label: "HTML / CSS", width: 50 },
    { src: mongodb, label: "MongoDB", width: 50 },
    { src: react_saga, label: "Redux & Saga", width: 65 },
    { src: bootstrap, label: "Bootstrap", width: 50 },
    { src: drf_logo, label: "DRF", width: 70 },
    { src: docker, label: "Docker", width: 60 },
    { src: graphql, label: "GraphQL", width: 55 },
    { src: pgadmin, label: "PostgreSQL", width: 70 },
    { src: awsLogo, label: "AWS Services", width: 70 },
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
              <div className="max-w-xl">
                {/* Section Label */}
                <p
                  className="
      text-sm
      uppercase
      tracking-widest
      text-customLightAqua
      font-semibold
      mb-3
    "
                >
                  <span className="font-conthrax">Who&apos;s this guy?</span>
                </p>

                {/* Justified Text */}
                <p
                  className="
     
      text-base
      leading-relaxed
      tracking-wide
      text-justify
    "
                >
                  With over four years of professional experience, I am a
                  full-stack engineer specializing in building scalable,
                  high-performance web applications and integrating LLM-powered
                  features. I have experience developing responsive user
                  interfaces, robust backend services, and AI-driven solutions
                  such as document processing, conversational interfaces, and
                  retrieval-augmented generation (RAG). I focus on writing
                  maintainable code, delivering production-ready AI workflows,
                  and enhancing user experience through thoughtful engineering.
                </p>
              </div>
            </div>
          </SplitterPanel>
          <SplitterPanel className="mb-3">
            <div className="flex flex-wrap">
              <div className="flex justify-center h-12 mb-3 w-full">
                <p className=" text-2xl !h-6 font-conthrax">
                  Technologies I've Worked With
                </p>
              </div>
              <div className="w-full h-full mx-5">
                <div className="grid grid-cols-4 gap-0">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center shadow-md m-2 rounded-lg p-2"
                    >
                      <Image
                        src={tech.src}
                        alt={tech.label}
                        width={tech.width}
                        preview
                        imageClassName="!rounded-full object-contain"
                      />
                      <div className="mt-2 text-sm font-conthrax font-semibold text-center">
                        {tech.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
      <div className="h-60 w-full mt-3">
        <h3 className="flex text-2xl font-conthrax justify-center">
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

      <Dialog
        visible={!!previewCert}
        onHide={() => setPreviewCert(null)}
        style={{ width: "80vw", maxWidth: "900px" }}
        header={
          <div className="flex items-center justify-between pr-4">
            <span className="font-conthrax text-base">
              {previewCert?.label}
            </span>
            <Button
              icon="pi pi-download"
              className="p-button-sm p-button-outlined"
              onClick={() => handleDownload(previewCert)}
            />
          </div>
        }
      >
        {previewCert && (
          <img
            src={previewCert.src}
            alt={previewCert.alt}
            className="w-full rounded"
          />
        )}
      </Dialog>
    </div>
  );
};

export default PageTwoIntro;
