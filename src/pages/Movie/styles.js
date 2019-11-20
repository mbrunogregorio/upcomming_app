import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  min-height: 100%;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;

export const Card = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  text-align: center;

  text-decoration: none;
  color: #fff;

  h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  strong {
    font-size: 18px;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Poster = styled.div`
  margin: 20px;
  width: 300px;
  background: transparent;
  img {
    width: 300px;
  }
`;

export const Info = styled.div`
  margin: 20px;
  width: 600px;
  background: transparent;
`;

export const Genre = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  span {
    margin-right: 3px;
    font-size: 16px;
    flex-direction: row;
    width: auto;
    background: #333;
    color: #eee;
    padding: 0px 3px;
    border-radius: 4px;
  }
`;

export const Overview = styled.p`
  font-size: 14px;
  color: #fff;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 40px;
`;
