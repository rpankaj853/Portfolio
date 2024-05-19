import { Image } from "primereact/image";
import { TabView, TabPanel } from "primereact/tabview";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";
import {
  cv,
  cv1,
  cv2,
  cv3,
  app,
  app1,
  app2,
  app3,
  app4,
  app5,
  app6,
  app7,
  con,
  con1,
  con2,
  con3html,
  con4marks,
  con5thermo,
  dar,
  dar1,
  dar2,
  dar3,
  dj,
  dj1,
  dj2,
  dj3,
  drf,
  drf1,
  ecom,
  ecom1,
  ecom2,
  ecom3,
  finder,
  finder1,
  finder2,
  piroll,
  piroll1,
  piroll2,
  piroll3,
  piroll4,
  pwd,
  pwd1,
  pwd2,
  todo,
  todo1,
  todo2,
  todo3,
  todo4,
  todo5,
  weather,
  weather1,
  weather2,
  weather3,
  weather4,
  clove,
  clove1,
  clove2,
  clove3,
  dog,
  dog1,
  dog2,
} from "../../helper/common-images";

import "../../css/galleria.css";

const PageThirdProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visible, setVisible] = useState(false);

  const images = [
    {
      src: todo,
      alt: "Image 1",
      name: "todo",
      category: "FE",
      Label: "To-do App",
      skills: "React / Python",
    },
    {
      src: clove,
      alt: "Image 2",
      name: "clove",
      category: "FE",
      Label: "Clove E-Cart",
      skills: "React / Python",
    },
    {
      src: weather,
      alt: "Image 3",
      name: "weather",
      category: "FE",
      Label: "Weather App",
      skills: "Html / Boostrap",
    },
    {
      src: cv,
      alt: "Image 4",
      name: "cv",
      category: "BE",
      Label: "CV Builder",
      skills: "Django / Boostrap",
    },
    {
      src: app,
      alt: "Image 5",
      name: "app",
      category: "FE",
      Label: "AppLab",
      skills: "React / Boostrap",
    },
    {
      src: con,
      alt: "Image 6",
      name: "converter",
      category: "FE",
      Label: "Converter",
      skills: "React / Python",
    },
    {
      src: dar1,
      alt: "Image 7",
      name: "darling",
      category: "FE",
      Label: "Darling Web App",
      skills: "Bootsrap",
    },
    {
      src: dj3,
      alt: "Image 8",
      name: "django",
      category: "BE",
      Label: "Django Portfolio",
      skills: "Django / Boostrap",
    },
    {
      src: drf,
      alt: "Image 9",
      name: "drf",
      category: "BE",
      Label: "DRF",
      skills: "Django RestFramework",
    },
    {
      src: ecom3,
      alt: "Image 10",
      name: "eCom",
      category: "FE",
      Label: "E Commerce",
      skills: "React / Python",
    },
    {
      src: pwd,
      alt: "Image 11",
      name: "pwd",
      category: "BE",
      Label: "Password Generator",
      skills: "Django / Boostrap",
    },
    {
      src: piroll,
      alt: "Image 12",
      name: "piroll",
      category: "FE",
      Label: "Piroll Webapp",
      skills: "React / Boostrap",
    },
    {
      src: dog,
      alt: "Image 13",
      name: "dog",
      category: "FE",
      Label: "Dog Gallery",
      skills: "html / Css",
    },
    // { src: finder, alt: "Image 11", name: "siteFinder", category: "BE" },
  ];

  const projectList = {
    cv: {
      title: "CV Builder",
      desc: "Empower job seekers with a user-friendly platform for creating professional resumes. Optimize chances in the job market with customizable templates and intuitive tools",
      imagesList: [
        { src: cv, alt: "Image 1" },
        { src: cv1, alt: "Image 1" },
        { src: cv2, alt: "Image 2" },
        { src: cv3, alt: "Image 3" },
      ],
    },
    app: {
      title: "App Lab",
      desc: "Unleash creativity in app development with dynamic tools and resources. Join a thriving community and bring your ideas to life from concept to deployment",
      imagesList: [
        { src: app, alt: "Image 1" },
        { src: app1, alt: "Image 2" },
        { src: app2, alt: "Image 3" },
        { src: app3, alt: "Image 1" },
        { src: app4, alt: "Image 2" },
        { src: app5, alt: "Image 3" },
        { src: app6, alt: "Image 2" },
        { src: app7, alt: "Image 3" },
      ],
    },
    converter: {
      title: "Converter",
      desc: "Simplify complex conversions across various units with an intuitive tool. Streamline calculations effortlessly for currency, temperature, weight, and more.",
      imagesList: [
        { src: con, alt: "Image 3" },
        { src: con1, alt: "Image 1" },
        { src: con2, alt: "Image 2" },
        { src: con3html, alt: "Image 3" },
        { src: con4marks, alt: "Image 1" },
        { src: con5thermo, alt: "Image 2" },
      ],
    },
    darling: {
      title: "Darling Projects",
      desc: "Showcase a diverse portfolio of creative endeavors, from web design to multimedia artworks. Explore innovative solutions and captivating designs reflecting a passion for excellence.",
      imagesList: [
        { src: dar, alt: "Image 1" },
        { src: dar1, alt: "Image 1" },
        { src: dar2, alt: "Image 2" },
        { src: dar3, alt: "Image 3" },
      ],
    },
    django: {
      title: "Django Portfolio",
      desc: " Navigate through a curated collection of web development projects, demonstrating proficiency in Django. Discover elegant designs and robust functionality tailored to diverse needs.",
      imagesList: [
        { src: dj, alt: "Image 1" },
        { src: dj1, alt: "Image 2" },
        { src: dj2, alt: "Image 3" },
        { src: dj3, alt: "Image 3" },
      ],
    },
    drf: {
      title: "Django Rest Framework",
      desc: "Explore a compilation of versatile RESTful APIs showcasing robust functionality and seamless integration. Demonstrates expertise in Python and Django frameworks",
      imagesList: [
        { src: drf, alt: "Image 1" },
        { src: drf1, alt: "Image 2" },
      ],
    },
    eCom: {
      title: "ECommerce",
      desc: "Revolutionize online shopping with a dynamic platform offering secure transactions and personalized recommendations. Explore a diverse range of products hassle-free.",
      imagesList: [
        { src: ecom3, alt: "Image 3" },
        { src: ecom, alt: "Image 1" },
        { src: ecom1, alt: "Image 2" },
        { src: ecom2, alt: "Image 3" },
      ],
    },
    pwd: {
      title: "Password Generator",
      desc: "Enhance digital security with custom-generated, unique passwords. Strengthen your online protection and enjoy peace of mind.",
      imagesList: [
        { src: pwd, alt: "Image 1" },
        { src: pwd1, alt: "Image 2" },
        { src: pwd2, alt: "Image 2" },
      ],
    },
    piroll: {
      title: "Piroll",
      desc: "Showcasing an elegant and versatile portfolio of creative works, Piroll offers a seamless browsing experience. From stunning visuals to intuitive navigation, explore a curated selection of projects that reflect craftsmanship and innovation.",
      imagesList: [
        { src: piroll, alt: "Image 1" },
        { src: piroll1, alt: "Image 2" },
        { src: piroll2, alt: "Image 3" },
        { src: piroll3, alt: "Image 1" },
        { src: piroll4, alt: "Image 2" },
      ],
    },
    siteFinder: {
      title: "Site Finder",
      desc: "Discover tailored website solutions effortlessly with our comprehensive search tool. Utilize intuitive filters to find the perfect match for your online presence",
      imagesList: [
        { src: finder, alt: "Image 1" },
        { src: finder1, alt: "Image 2" },
        { src: finder2, alt: "Image 3" },
      ],
    },
    todo: {
      title: "To-do List",
      desc: "Organize tasks efficiently and boost productivity with our intuitive manager. Set priorities, track progress, and tackle goals seamlessly",
      imagesList: [
        { src: todo, alt: "Image 1" },
        { src: todo1, alt: "Image 2" },
        { src: todo2, alt: "Image 3" },
        { src: todo3, alt: "Image 1" },
        { src: todo4, alt: "Image 2" },
        { src: todo5, alt: "Image 3" },
      ],
    },
    weather: {
      title: "Weather App",
      desc: "A weather project collects and analyzes atmospheric data to predict conditions like temperature and precipitation",
      imagesList: [
        { src: weather, alt: "Image 1" },
        { src: weather1, alt: "Image 2" },
        { src: weather2, alt: "Image 3" },
        { src: weather3, alt: "Image 1" },
        { src: weather4, alt: "Image 2" },
      ],
    },
    clove: {
      title: "Clove E-Cart",
      desc: "Clove E-Cart is an online platform for purchasing a wide range of clothing and accessories, offering stylish options and convenient delivery.",
      imagesList: [
        { src: clove, alt: "Image 1" },
        { src: clove1, alt: "Image 2" },
        { src: clove2, alt: "Image 3" },
        { src: clove3, alt: "Image 1" },
      ],
    },
    dog: {
      title: "Dog Gallery",
      desc: "Dog Gallery is an online platform showcasing a variety of dog breeds, featuring photos, descriptions, and care tips.",
      imagesList: [
        { src: dog, alt: "Image 1" },
        { src: dog1, alt: "Image 2" },
        { src: dog2, alt: "Image 3" },
      ],
    },
  };

  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <img
        src={item.src}
        alt={item.alt}
        style={{ width: "600px", height: "300px", display: "block" }}
      />
    );
  };

  const handleImageClick = (image) => {
    const selectedList = projectList[image];
    setSelectedImage(selectedList);
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };
  return (
    <div className="w-screen h-auto overflow-clip bg-customGray ">
      <div className=" h-auto flex items-end justify-center">
        <h3 className="flex text-4xl font-sans font-semibold justify-center mt-14">
          PROJECTS
        </h3>
      </div>
      <div className=" h-auto mt-4 ">
        <TabView className="  mx-60  pb-5" scrollable>
          <TabPanel header="All" className="bg-customGray">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-3 rounded-md ">
              {images.map((image, index) => (
                <div className="flex-auto m-2 cursor-pointer shadow-xl relative">
                  <Button
                    className="w-full h-auto"
                    onClick={() => handleImageClick(image.name)}
                  >
                    <div className="relative group w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width="100%"
                        height="auto"
                        onClick={() => handleImageClick(image.name)}
                        className="cursor-pointer object-cover w-full h-full"
                        imageClassName="cursor-pointer object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-white group-hover:opacity-100 transition-opacity">
                        <div>
                          <p className="text-black text-center text-1xl font-semibold">
                            {image.Label}
                          </p>
                          <p className="text-customLightAqua">{image.skills}</p>
                        </div>
                      </div>
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel header="FRONTEND">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-3 rounded-md ">
              {images
                .filter((image) => image.category === "FE")
                .map((image, index) => (
                  <div className="flex-auto m-2 cursor-pointer shadow-xl relative">
                    <Button
                      className="w-full h-auto p-0"
                      onClick={() => handleImageClick(image.name)}
                    >
                      <div className="relative group w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width="100%"
                          height="auto"
                          onClick={() => handleImageClick(image.name)}
                          className="cursor-pointer object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-white group-hover:opacity-100 transition-opacity">
                          <div>
                            <p className="text-black text-center text-2xl font-semibold">
                              {image.Label}
                            </p>
                            <p className="text-customLightAqua">
                              {image.skills}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Button>
                  </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel header="BACKEND">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-3 rounded-md ">
              {images
                .filter((image) => image.category === "BE")
                .map((image, index) => (
                  <div className="flex-auto m-2 cursor-pointer shadow-xl relative">
                    <Button
                      className="w-full h-auto p-0"
                      onClick={() => handleImageClick(image.name)}
                    >
                      <div className="relative group w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width="100%"
                          height="auto"
                          onClick={() => handleImageClick(image.name)}
                          className="cursor-pointer object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-white group-hover:opacity-100 transition-opacity">
                          <div>
                            <p className="text-black text-center text-2xl font-semibold">
                              {image.Label}
                            </p>
                            <p className="text-customLightAqua">
                              {image.skills}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Button>
                  </div>
                ))}
            </div>
          </TabPanel>
        </TabView>
      </div>
      <Dialog header="Project Overview" visible={visible} onHide={hideDialog}>
        {selectedImage && (
          <>
            <div className="card">
              <Galleria
                value={selectedImage?.imagesList}
                responsiveOptions={responsiveOptions}
                style={{ maxWidth: "640px" }}
                item={itemTemplate}
                showThumbnails={false}
                showIndicators
                changeItemOnIndicatorHover
                className="galleria-specific-container"
                circular
                autoPlay
                transitionInterval={2000}
              />
            </div>
            <div className="max-w-prose mt-3">
              <h3 className=" text-2xl font-semibold">
                {selectedImage?.title}
              </h3>
              <hr className="my-2" />
              <p className="text-zinc-500">{selectedImage?.desc}</p>
            </div>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default PageThirdProjects;
