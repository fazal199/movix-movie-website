import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import "./headerstyle.scss";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  //whenever the page change scroll will set to be top
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location])

  let controlNavbar = (e)=>{


     if(window.scrollY > 200)
     {
        if(window.scrollY > lastScrollY && !mobileMenu)
        setShow("hide")

        else
        setShow("show");
     }

     else
     {
      setShow("top");
    }
    setLastScrollY(window.scrollY);

  }

  useEffect(()=>{
    window.addEventListener("scroll",controlNavbar);

    return ()=>{
      window.removeEventListener("scroll",controlNavbar);
    }
  },[lastScrollY])

  let openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  let openSearch = () => {
    setShowSearch(true);
    setMobileMenu(false);
  };

   //handle the user search
   let handleSearch = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }

  };

  

  return (
    <header className={`header ${mobileMenu && "mobileView"} ${show} `}>
      <ContentWrapper>
        <figure onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
        </figure>
        <ul className="menuItems">
          <li>
            <NavLink onClick={() => setMobileMenu(false)} to={"/explore/movie"} className={() => `menuItem`}>Movies</NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMobileMenu(false)} to={"/explore/tv"} className={() => `menuItem`}>TV Shows</NavLink>
          </li>
          <li id="searchicon">
            <HiOutlineSearch className="menuItem" onClick={openSearch} />
          </li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
     { showSearch && <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
            <input
              onKeyDown={handleSearch}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="search movies"
            />
             <HiOutlineSearch onClick={() => navigate(`/search/${query}`)} className="searchiconwithcross"/>
            <VscChromeClose onClick={() => setShowSearch(false)}/>
          </div>
        </ContentWrapper>
      </div>}
    </header>
  );
};

export default Header;
