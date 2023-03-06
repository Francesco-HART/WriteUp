import React, { useEffect, useState } from "react";
import classes from "../../styles/menu/menu.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export const Menu = () => {
  const [menuOpen, setmenuOpen] = useState<boolean>(false);

  const [size, setsize] = useState<{
    width: undefined | number;
    height: undefined | number;
  }>({
    width: undefined,
    height: undefined,
  });
  const menuToggleHandler = () => {
    setmenuOpen((open) => !open);
  };

  useEffect(() => {
    const handleResize = () => {
      setsize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width != undefined && size.width > 768 && menuOpen)
      setmenuOpen(false);
  }, [size.width, menuOpen]);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.header_content}>
          <h2 className={classes.header_content_logo}>Logo</h2>
          <nav
            className={`${classes.header_content_nav} ${
              menuOpen ? classes.isMenu : ""
            }`}
          >
            <ul>
              <li>
                <a href="/">Page 1</a>
              </li>
              <li>
                <a href="/">Page 2</a>
              </li>
              <li>
                <a href="/">Page 3</a>
              </li>
            </ul>
            {/* <button>CTA PAGE</button> */}
            <a href="#" className={classes.neon_button}>
              En Savoir Plus
            </a>
          </nav>

          <div className={classes.header_content_toggle}>
            {menuOpen ? (
              <AiOutlineClose onClick={menuToggleHandler} />
            ) : (
              <BiMenuAltRight onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </header>
    </>
  );
};
export default Menu;
