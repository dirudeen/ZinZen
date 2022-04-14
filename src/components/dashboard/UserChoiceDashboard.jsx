import React from "react";
import { Button } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import AddIconLight from "../../images/AddIconLight.png";
import AddIconDark from "../../images/AddIconDark.png";
import { darkModeState } from "../../store/DarkModeState";
import "../../translations/i18n";
import "./dashboard.scss"

export const UserChoiceDashboard = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const darkModeStatus = useRecoilValue(darkModeState);

    function truncateContent(content, maxLength = 20) {
        let length = content.length;
        if(length>=maxLength){
            return content.substring(0, maxLength) + '...'
        }
        else{
            return content
        }
      }

    return (
        <div>
            <Container fluid>
                <Row>
                    <Button
                        variant={darkModeStatus ? "brown" : "peach"}
                        size="lg"
                        className={
                            darkModeStatus
                                ? "dashboard-choice-dark1"
                                : "dashboard-choice-light1"
                        }
                    >
                        {truncateContent(t("mygoals"))}
                    </Button>
                    <Button
                        variant={darkModeStatus ? "brown" : "peach"}
                        className={
                            darkModeStatus
                                ? "dashboard-add-btn-dark1"
                                : "dashboard-add-btn-light1"
                        }
                    >
                        {darkModeStatus ? (
                            <img
                                src={AddIconDark}
                                alt="Add Icon"
                                className="add-icon"
                            />
                        ) : (
                            <img
                                src={AddIconLight}
                                alt="Add Icon"
                                className="add-icon"
                            />
                        )}
                    </Button>
                </Row>
                <Row>
                    <Button
                        variant={darkModeStatus ? "dark-pink" : "pink"}
                        size="lg"
                        className={
                            darkModeStatus
                                ? "dashboard-choice-dark"
                                : "dashboard-choice-light"
                        }
                    >
                        {truncateContent(t("myfeelings"))}
                    </Button>
                    <Button
                        variant={darkModeStatus ? "dark-pink" : "pink"}
                        className={
                            darkModeStatus
                                ? "dashboard-add-btn-dark"
                                : "dashboard-add-btn-light"
                        }
                        onClick={() => {
                            navigate("/Home/AddFeelings");
                            window.location.reload(false);
                        }}
                    >
                        {darkModeStatus ? (
                            <img
                                src={AddIconDark}
                                alt="Add Icon"
                                className="add-icon"
                            />
                        ) : (
                            <img
                                src={AddIconLight}
                                alt="Add Icon"
                                className="add-icon"
                            />
                        )}
                    </Button>
                </Row>
                <Row>
                    <Button
                        variant={darkModeStatus ? "dark-grey" : "grey-base"}
                        size="lg"
                        className={
                            darkModeStatus
                                ? "dashboard-choice-dark"
                                : "dashboard-choice-light"
                        }
                    >
                        {truncateContent(t("mytime"))}
                    </Button>
                    <Button
                        variant={darkModeStatus ? "dark-grey" : "grey-base"}
                        className={
                            darkModeStatus
                                ? "dashboard-add-btn-dark"
                                : "dashboard-add-btn-light"
                        }
                    >
                        {darkModeStatus ? (
                            <img
                                src={AddIconDark}
                                alt="Add Icon"
                                className="add-icon"
                            />
                        ) : (
                            <img
                                src={AddIconLight}
                                alt="Add Icon"
                                className="add-icon"
                            />
                        )}
                    </Button>
                </Row>
                <Row>
                    <Button
                        variant={darkModeStatus ? "dark-blue" : "pale-blue"}
                        size="lg"
                        className={
                            darkModeStatus
                                ? "dashboard-choice-dark"
                                : "dashboard-choice-light"
                        }
                    >
                        {truncateContent(t("explore"))}
                    </Button>
                    <Button
                        variant={darkModeStatus ? "dark-blue" : "pale-blue"}
                        className={
                            darkModeStatus
                                ? "dashboard-add-btn-dark"
                                : "dashboard-add-btn-light"
                        }
                    >
                        {darkModeStatus ? (
                            <img
                                src={AddIconDark}
                                alt="Add Icon"
                                className="add-icon"
                            />
                        ) : (
                            <img
                                src={AddIconLight}
                                alt="Add Icon"
                                className="add-icon"
                            />
                        )}
                    </Button>
                </Row>
                <Row>
                    <Button
                        variant={darkModeStatus ? "dark-purple" : "purple"}
                        size="lg"
                        className={
                            darkModeStatus
                                ? "dashboard-choice-dark"
                                : "dashboard-choice-light"
                        }
                    >
                        {truncateContent(t("zinzen"))}
                    </Button>
                    <Button
                        variant={darkModeStatus ? "dark-purple" : "purple"}
                        className={
                            darkModeStatus
                                ? "dashboard-add-btn-dark"
                                : "dashboard-add-btn-light"
                        }
                    >
                        {darkModeStatus ? (
                            <img
                                src={AddIconDark}
                                alt="Add Icon"
                                className="add-icon"
                            />
                        ) : (
                            <img
                                src={AddIconLight}
                                alt="Add Icon"
                                className="add-icon"
                            />
                        )}
                    </Button>
                </Row>
            </Container>
        </div>
    );
};