import React from "react";
import Menu from "../../Menu/Menu";
import { SettingsContainer, SettingsPanel, SettingsBox } from "./styles";

const Settings = () => {
  return (
    <SettingsContainer>
      <Menu />
      <SettingsPanel>
        <SettingsBox>settings</SettingsBox>
      </SettingsPanel>
    </SettingsContainer>
  );
};

export default Settings;
