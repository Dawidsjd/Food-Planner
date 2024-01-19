import React, { useState } from "react";
import {
  ImageSection,
  ProfileImage,
  ProfileButtons,
  StyledBtn,
  DataSection,
  StyledForm,
  StyledTitle,
  StyledSubtitle,
  StyledInput,
  FavouriteBox,
  SetSection,
} from "../styles";
import User from "../../../../assets/user.jpg";

const General = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <ImageSection>
        <ProfileImage src={selectedImage || User} />
        <ProfileButtons>
          <label htmlFor="imageInput">
            <StyledBtn as="span">Change Image</StyledBtn>
          </label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <StyledBtn onClick={handleDeleteImage}>Delete</StyledBtn>
        </ProfileButtons>
      </ImageSection>
      <DataSection>
        <StyledForm>
          <StyledTitle>Edit Profile</StyledTitle>
          <StyledSubtitle>User</StyledSubtitle>
          <StyledInput type="text" />
          <StyledSubtitle>Email</StyledSubtitle>
          <StyledInput type="email" />
          <StyledSubtitle>Phone Number</StyledSubtitle>
          <StyledInput type="number" />
        </StyledForm>
        <FavouriteBox>
          <StyledTitle>Favourites Dishes</StyledTitle>
          Favourite list
        </FavouriteBox>
      </DataSection>
    </>
  );
};

export default General;
