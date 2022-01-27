import { Container } from "./styles";

import ThemeButton from "../ThemeButton/index";

import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <Container>
      <header className="header">
        <div className="content">
          <a href="/">
            <img src="/logo.svg" alt="API Store Logo" />
          </a>
          <nav>
            <ThemeButton />
            <a href="/cart">
              <FaShoppingCart />
            </a>
          </nav>
        </div>
      </header>
    </Container>
  );
}
