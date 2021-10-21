import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem, 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;

export const FooterSubHeading = styled.h2`
  /*   
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif'; */
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 24px;
`;
export const FooterSubText = styled.p`
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;
export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }

  @media (max-width: 820px) {
    width: 100%auto;
    margin-bottom: 16px;
  }
`;
export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media (max-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinksItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  color: #fff;
  text-align: left;
  width: 160px;
  box-sizing: border-box;

  @media (max-width: 420px) {
    margin: 0px;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
  color: #fff;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  max-width: 1000px;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0px auto;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
export const SocialLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  justify-self: start;
  margin-bottom: 16px;

  &:hover {
    color: #fff;
  }
`;
export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
`;
export const SocialIconLink = styled(Link)`
  color: #fff;
  font-size: 24px;
  margin: 0px 8px;

  &:hover {
    color: #fff;
  }
`;
export const WebsiteRights = styled.p`
  color: #fff;
  margin-bottom: 16px;
`;
