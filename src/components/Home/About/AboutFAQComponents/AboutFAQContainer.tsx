// FAQ 컨테이너
// 내용이 들어가는 곳
import React from "react";
import "../AboutFAQComponents/App.css";
import Accordion from "./components/Accordion";

function AboutFAQContainer() {
  const accordionItems = [
    {
      title: "유니콘 판별기의 가격 정책은 어떻게 되나요? ",
      content: (
        <div>
          유니콘 판별기는 현재 무료로 운영되고 있으며, 이를 기반으로 한 유료
          컨설팅을 운영하고 있습니다. 추가적으로 깊이 있는 데이터 분석이
          필요하시면 info@1zlabs.com 로 연락주시기 바랍니다.
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
