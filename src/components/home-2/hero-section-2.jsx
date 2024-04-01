import React from "react";
import man_img from "@assets/images/banner/hero_banner_image_2.png";
import shape_img from "@assets/images/shapes/shape_triangle.png";
import shape_2 from "@assets/images/shapes/shape_box_1.png";
import shape_3 from "@assets/images/shapes/shape_box_2.png";
import shape_4 from "@assets/images/shapes/shape_box_3.png";
import shape_6 from "@assets/images/shapes/shape_circle_2.svg";
import shape_7 from "@assets/images/shapes/shape_circle_2.svg";
import icon from "@assets/images/shapes/shape_comment_2.png";
import icon2 from "@assets/images/shapes/shape_trophy.png";
import smiley_face from "@assets/images/shapes/shape_smiley_face.png";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection2 = () => {
  return (
    <section className="hero_banner_section style_2 mouse_move decoration_wrap fix">
      <div className="container decoration_wrap">
        <h1 className="cd-headline clip is-full-width">
          <span className="d-block">
            Howdy 
            <Image
              className="wow tada"
              data-wow-delay=".1s"
              src={smiley_face}
              style={{ width: "auto", height: "auto" }}
              alt="Smiley Face"
            /> 
            I am Paradox,
          </span>
          <TypeAnimation
            sequence={[
              "Creative UI/UX",
              3000,
              "Creative Agency",
              3000,
              "Creative Portfolio",
              3000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </h1>
        <div className="hero_banner_image decoration_wrap">
          <div className="man_image">
            <Image
              src={man_img}
              style={{ width: "100%", height: "100%" }}
              alt="Paradox Illustration Image"
            />
          </div>
          <div className="deco_item shape_1">
            <Image
              src={shape_img}
              style={{ width: "100%", height: "100%" }}
              alt="Paradox Illustration Image"
            />
          </div>
        </div>
        <div
          className="iconbox_support"
          data-parallax='{"y" : -150, "smoothness": 20}'
        >
          <div className="iconbox_item wow fadeInUp" data-wow-delay=".4s">
            <div className="item_icon">
              <Image
                src={icon}
                style={{ width: "100%", height: "100%" }}
                alt="Paradox Icon Comment"
              />
            </div>
            <div className="item_content">
              <h3 className="item_title">24/7 Live Chat</h3>
              <p className="mb-0">Live Chat & Support</p>
            </div>
          </div>
        </div>
        <div
          className="iconbox_award"
          data-parallax='{"y" : 150, "smoothness": 20}'
        >
          <div className="iconbox_item wow fadeInUp" data-wow-delay=".2s">
            <div className="item_icon">
              <Image
                src={icon2}
                style={{ width: "100%", height: "100%" }}
                alt="Paradox Trophy"
              />
            </div>
            <div className="item_content">
              <h3 className="item_title">Judge Award</h3>
              <p className="mb-0">Best Design Award</p>
            </div>
          </div>
        </div>

        <div className="deco_item shape_2">
          <Image
            className="layer"
            data-depth="0.3"
            src={shape_2}
            style={{ width: "100%", height: "100%" }}
            alt="Paradox Illustration Image"
          />
        </div>
        <div className="deco_item shape_3">
          <Image
            className="layer"
            data-depth="0.3"
            src={shape_3}
            style={{ width: "100%", height: "100%" }}
            alt="Paradox Illustration Image"
          />
        </div>
        <div className="deco_item shape_4">
          <Image
            className="layer"
            data-depth="0.5"
            src={shape_4}
            style={{ width: "100%", height: "100%" }}
            alt="Paradox Illustration Image"
          />
        </div>
      </div>

      <div className="deco_item shape_5">
        <img
          className="layer"
          data-depth="0.1"
          src="/assets/images/shapes/shape_circle_dashed_2.png"
          alt="Paradox Illustration Image"
        />
      </div>
      <div className="deco_item shape_6">
        <Image
          src={shape_6}
          style={{ width: "100%", height: "100%" }}
          alt="Paradox Illustration Image"
        />
      </div>
      <div className="deco_item shape_7">
        <Image
          src={shape_7}
          style={{ width: "100%", height: "100%" }}
          alt="Paradox Illustration Image"
        />
      </div>
    </section>
  );
};

export default HeroSection2;
