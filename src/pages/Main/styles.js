import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    cursor: text;
  }
`;

export const SearchButton = styled.button.attrs({
  type: 'button',
})`
  background: #3a6186;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.div`
  font-size: 14px;

  a {
    text-decoration: none;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: 250px;
    height: 350px;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
  }

  img {
    width: 150px;
    height: auto;
    margin: 10px 15px;
  }
`;

export const ListItemInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  text-align: center;

  text-decoration: none;
  color: #333;

  h3 {
    margin-bottom: 10px;
  }
  strong {
    font-size: 12px;
    width: 100%;
    margin-bottom: 10px;
  }

  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    background-color: #dfdfdf;
  }
  span {
    margin-right: 3px;
    font-size: 10px;
    flex-direction: row;
    width: auto;
    background: #333;
    color: #eee;
    padding: 0px 3px;
  }
`;

export const ScrollBox = styled.div`
  margin-top: 30px;
  width: 100%;
  overflow: auto;
  height: auto;
  background: red;
  ul {
    width: 100%;
    display: flex;
    background: #eee;
    text-decoration: none;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;

    align-content: start;
  }
`;
