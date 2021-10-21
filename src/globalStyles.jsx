import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  border: 0;
  outline: 0;
  width: inherit;
  height: inherit;
  object-fit: cover;
}

button {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  background: transparent;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
}
input,
textarea {
  border: 1px solid #ebeef7;
  transition: all 0.3s linear;
  &::placeholder {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    text-transform: capitalize;
    color: color(gray-5);
  }

  &:focus,
  &:hover {
    transition: all 0.3s linear;
    box-shadow: none;
    outline: none;
  }
}

html {
  scroll-behavior: smooth;
}

a {
  display: inline-block;
  &:hover {
    color: inherit;
  }
}

ul,
ol {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

a {
  text-decoration: none;
}

::-webkit-scrollbar {
  scrollbar-width: '20px';
}

// ==== Responsive  ====== \\
@mixin max($size) {
  @media (max-width: $size) {
    @content;
  }
}

@mixin min($size) {
  @media (min-width: $size) {
    @content;
  }
}

@mixin min-max($min, $max) {
  @media (min-width: $min) and (max-width: $max) {
    @content;
  }
}



`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: auto;
  padding: 0px 50px;

  @media (max-width: 991px) {
    padding: 0px 30px;
  }
`;

export const Button = styled.button`
  color: #fff;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  background: ${({ primary }) => (primary ? '#4b59f7' : '#0467fb')};
  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ primary }) => (primary ? '#0467fb' : '#4b59f7')};
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
