import Logotype from "@/components/Logotype"
import Navigation from "@/components/Navigation"
import Burger from "@/components/Burger"


export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logotype />
          <Navigation
            className="header__nav"
            listClassName="header__list"
            itemClassName="header__item"
            linkClassName="header__link"
            activeClassName="header__link--active"
          />
          <Burger />
        </div>
      </div>
    </header>
  );
}