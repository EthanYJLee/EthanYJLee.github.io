import React from "react";
import { useTranslation } from 'react-i18next';

const Skip = () => {
  const { t } = useTranslation();
  
  return (
    <div id="skip">
      <a href="#header">헤더 영역 바로가기</a>
      <a href="#main">메인 영역 바로가기</a>
      <a href="#footer">푸터 영역 바로가기</a>
    </div>
  );
};

export default Skip; 