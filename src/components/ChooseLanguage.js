import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { useTranslation } from "react-i18next";

function ChooseLanguage() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <Row>
      <Col md={12}>
        <div className="d-flex float-right">
          <p style={{ marginTop: '10px' }}>{t('CHOOSE_LANGUAGE')}</p>
          <Button className="mx-2" onClick={() => changeLanguage("vn")}>{t('LANG_VI')}</Button>
          <Button onClick={() => changeLanguage("en")}>{t('LANG_EN')}</Button>
        </div>
      </Col>
    </Row>
  )
}

export default ChooseLanguage;