import React from "react";
import NavLinks from "./NavLinks"
import "./style/NavBar.css"
import image1 from "./images/img.jpeg"

function NavBar(props) {
  return (
    <div>
      <header>
        <div id="left">
          <a className="logo" href="https://github.com/">
            <svg height="32" viewBox="0 0 16 16" version="1.1" width="32">
              <path
                fill="#D6D8DA"
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
          <div>
          <input type="search" placeholder="Search or jump to..." />
          
          </div>
          <NavLinks pull="Pull requests" issues="Issues" marketplace="Marketplace" explore="Explore"/>
        </div>
        <div class="right">
          <div>
            <a href="https://github.com/notifications" className="notification">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="octicon octicon-bell"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill="#D6D8DA"
                  d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"
                />
                <path
                  fill-rule="evenodd"
                  fill="#D6D8DA"
                  d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="https://github.com/new" className="add">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="octicon octicon-plus"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  fill="#D6D8DA"
                  d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"
                />
              </svg>
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.296477 1.71L2.88648 4.3C3.27648 4.69 3.90648 4.69 4.29648 4.3L6.88648 1.71C7.51648 1.08 7.06648 0 6.17648 0H0.996478C0.106478 0 -0.333523 1.08 0.296477 1.71Z"
                  fill="#D6D8DA"
                />
              </svg>
            </a>
          </div>
          <div>
            <a href="https://github.com/nomanejaz132" id="image" className="user">
              <img src={image1} alt="nomanejaz132"/>
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.296477 1.71L2.88648 4.3C3.27648 4.69 3.90648 4.69 4.29648 4.3L6.88648 1.71C7.51648 1.08 7.06648 0 6.17648 0H0.996478C0.106478 0 -0.333523 1.08 0.296477 1.71Z"
                  fill="#D6D8DA"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar
