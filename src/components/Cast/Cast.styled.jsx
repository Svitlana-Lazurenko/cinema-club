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
  flex-basis: calc((100% - 45px) / 4);
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ProfileImage = styled.img``;

export const Name = styled.p`
  margin-bottom: 5px;
`;

export const Character = styled.p``;

export const Text = styled.span`
  color: orange;
  font-weight: 600;
`;
