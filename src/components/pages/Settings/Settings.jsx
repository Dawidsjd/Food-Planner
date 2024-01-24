import React, { useState } from "react";
import Menu from "../../Menu/Menu";
import {
  SettingsContainer,
  ContentWrapper,
  SettingsPanel,
  SettingsBox,
  SectionHeader,
  SectionLinks,
  LinkBtn,
  ActiveSection,
  SetSection,
  StyledBtn,
} from "./styles";
import General from "./General/General";
import Security from "./Security/Security";
import Favorite from "./Favorite/Favorite";
import SearchHeader from "../../SearchHeader/SearchHeader";

const Settings = () => {
  const [activeLink, setActiveLink] = useState("general");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <SettingsContainer>
      <Menu />
      <ContentWrapper>
        <SearchHeader />
        <SettingsPanel>
          <SettingsBox>
            <SectionHeader>
              <p className="header">Settings</p>
              <SectionLinks>
                <LinkBtn
                  className={activeLink === "general" ? "active" : ""}
                  onClick={() => handleLinkClick("general")}
                >
                  General
                </LinkBtn>
                <LinkBtn
                  className={activeLink === "security" ? "active" : ""}
                  onClick={() => handleLinkClick("security")}
                >
                  Security
                </LinkBtn>
                <LinkBtn
                  className={activeLink === "favorite" ? "active" : ""}
                  onClick={() => handleLinkClick("favorite")}
                >
                  Favorite
                </LinkBtn>
              </SectionLinks>
            </SectionHeader>
            <ActiveSection>
              {activeLink === "general" && <General />}
              {activeLink === "security" && <Security />}
              {activeLink === "favorite" && <Favorite />}
            </ActiveSection>
            <SetSection>
              <StyledBtn className="cancel">Cancel</StyledBtn>
              <StyledBtn>Save</StyledBtn>
            </SetSection>
          </SettingsBox>
        </SettingsPanel>
      </ContentWrapper>
    </SettingsContainer>
  );
};

export default Settings;
