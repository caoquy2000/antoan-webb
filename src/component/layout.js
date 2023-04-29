import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StyledComponentsRegistry from "./registry";

export default function Layout({ children }) {
    return (
      <>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
      </>
    )
  }