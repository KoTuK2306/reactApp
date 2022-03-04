import styled, { css } from "styled-components";

const AVATAR_SIZE = 50;

const avatar = css`
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => `${AVATAR_SIZE * props.scale}px`};
  height: ${(props) => `${AVATAR_SIZE * props.scale}px`};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  font-size: ${(props) => `${(AVATAR_SIZE * props.scale) / 1.75}px`};
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-radius: ${(props) => (props.variant === "rounded" ? "50%" : 0)};
  user-select: none;
  ${(props) => (props.src === "" ? undefined : avatar)}
`;
