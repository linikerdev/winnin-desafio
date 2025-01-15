import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${props => props.theme.colors.background};
    font-size:${props => props.theme.size.medium};
    color: ${props => props.theme.colors.text};
    font-family:${props => props.theme.fontfamily};
}
/* Estilos globais */


.theme-toggle {
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

/* Footer */
footer.light {
  background-color: #eaeaea;
  color: #000;
}

footer.dark {
  background-color: #333333;
  color: #fff;
}

/* Botões */
button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

button.active {
  background-color: #0056b3;
}

/* Input */
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

/* Cards */
.anime-card {
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.anime-card:hover {
  transform: scale(1.02);
}

.card-grid.light {
  background-color: #f9f9f9;
}

.card-grid.dark {
  background-color: #1a1a1a;
}

.anime-card .title {
  font-weight: bold;
  font-size: 1.2rem;
}

.anime-card .tags {
  display: flex;
  gap: 5px;
  margin: 10px 0;
}

.anime-card .rating {
  font-size: 1.1rem;
  color: #ff9800;
}

/* Tags */
.tag {
  background-color: #007bff;
  color: #fff;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.9rem;
}
`;

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 768px) {
    padding: auto;
  }
`;

export default GlobalStyle












