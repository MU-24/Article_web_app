import React from "react";

const About = () => {
  return (
    <div className="container flex justify-center mx-auto mt-28 md:mt-36 h-screen">
      <div className="grid  gap-8">
        <div className="flex flex-col items-center">
          <div className="layout my-4 py-3 m-10">
            <h1 className="text-center text-xl md:text-4xl text-gray-500 font-bold mb-4">
              Welcome to UK Articles
            </h1>
            <div>
              <h1 className="text-center text-xl font-semibold text-gray-600">
                Our Mission
              </h1>
              <p className="text-gray-600 max-w-xl mx-auto my-4">
                At <span className="text-green-500 font-bold">UK Articles</span>
                , we are dedicated to providing Articles in the field
                of Computer Programming.{" "}
              </p>
            </div>

            <div>
              <h1 className="text-center text-xl font-semibold text-gray-600">
                Who We Are
              </h1>
              <p className="text-gray-600 max-w-xl mx-auto my-4">
                We are a passionate team of professionals, committed to making a
                difference in your daily life. With a focus on excellence and
                 satisfaction, we have assembled a team of skilled
                Programmers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
