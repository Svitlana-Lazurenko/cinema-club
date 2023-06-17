import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 30px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const CastItem = styled.li`
  width: 200px;
  border: 1px solid orange;
  padding: 10px;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ProfileImage = styled.img`
  display: block;
  margin: 0 auto 5px;
`;

export const Info = styled.p``;

export const Name = styled.span`
  display: block;
  color: orange;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const TextName = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const Character = styled.span`
  display: block;
  color: orange;
  font-weight: 600;
`;

export const TextCharacter = styled.span`
  display: block;
`;
