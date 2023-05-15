import styled from 'styled-components';

export const ListCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  padding: 20px;
`;

export const ItemCast = styled.li`
  width: 140px;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: solid 1px rgb(0, 1, 0, 0.24);
  border-radius: 7px;
`;

export const ItemCastText = styled.p`
  font-size: 14px;
  padding: 0 5px;
  margin: 4px 0;
`;

export const ImgCast = styled.img`
  object-fit: cover;
  width: 100%;
  height: 210px;
`;
