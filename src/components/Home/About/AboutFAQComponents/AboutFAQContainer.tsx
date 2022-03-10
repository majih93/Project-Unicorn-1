// FAQ 컨테이너
// 내용이 들어가는 곳
import React from "react";
import "../AboutFAQComponents/App.css";
import Accordion from "./components/Accordion";

function AboutFAQContainer() {
  const accordionItems = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. 
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </div>
      ),
    },
  ];
  return (
    <div className="container">
      <Accordion items={accordionItems} />
    </div>
  );
}

export default AboutFAQContainer;
