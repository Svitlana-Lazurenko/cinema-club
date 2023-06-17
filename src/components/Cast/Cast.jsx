import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/movies-api';
import {
  Container,
  CastList,
  CastItem,
  ProfileImage,
  Name,
  Character,
  Text,
} from './Cast.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(Status.PENDING);

    api
      .fetchMovieCast(id)
      .then(castObj => {
        if (castObj.cast.length === 0) {
          return Promise.reject(new Error(`Cast not found`));
        }

        setCast([...castObj.cast]);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [id]);

  if (status === 'idle') {
    return null;
  }

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (status === 'rejected') {
    return <div>{error.message}</div>;
  }

  if (status === 'resolved') {
    return (
      <Container>
        <CastList>
          {cast.map(profile => (
            <CastItem key={profile.cast_id}>
              <ProfileImage
                src={
                  profile.profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile.profile_path}`
                    : 'https://fakeimg.pl/200x300?text=200x300'
                }
                alt={`${profile.name}`}
              />
              <Name>
                <Text>Name: </Text>
                {profile.name}
              </Name>
              <Character>
                <Text>Role: </Text>
                {profile.character}
              </Character>
            </CastItem>
          ))}
        </CastList>
      </Container>
    );
  }
};

export default Cast;
