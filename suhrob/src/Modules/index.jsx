import React, { useState } from 'react'
import trending from './dataBase_RecemmendFile.js';
import "./css/index.css"

import { Link } from 'react-router-dom';
import logo from "./img/Movie.png"
import profil from "./img/Oval — копия.png"
import search from "./img/Shape (6).png"

import suggestedFIlms from './dataBase_RecemmendFile.js';


export default function Home() {
  let [searchText, setSearch] = useState("");
  let [display, setDisplay] = useState("block");
  return (
    <div style={{ "width": "100%", "height": "100vh", "display": "flex" }} class="mainscreen">
      <header className="header">
        <div className="nav">
          <Link to="/" className='header-logo'>
            <img src={logo} alt='Logo' />
          </Link>

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="200" viewBox="0 0 20 200" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0H8C8.6 0 9 0.4 9 1V8C9 8.6 8.6 9 8 9H1C0.4 9 0 8.6 0 8V1C0 0.4 0.4 0 1 0ZM1 11H8C8.6 11 9 11.4 9 12V19C9 19.6 8.6 20 8 20H1C0.4 20 0 19.6 0 19V12C0 11.4 0.4 11 1 11ZM19 0H12C11.4 0 11 0.4 11 1V8C11 8.6 11.4 9 12 9H19C19.6 9 20 8.6 20 8V1C20 0.4 19.6 0 19 0ZM12 11H19C19.6 11 20 11.4 20 12V19C20 19.6 19.6 20 19 20H12C11.4 20 11 19.6 11 19V12C11 11.4 11.4 11 12 11Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.08 124.481H20V140H0V124.481H4.92L2.22 121.203L3.78 120.029L7 123.909L10.22 120L11.78 121.203L9.08 124.481ZM2 126.421V138.06H12V126.421H2ZM17 134.18H15V132.241H17V134.18ZM15 130.301H17V128.361H15V130.301Z" fill="#5A698F" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9556 60H3.04444C1.36304 60 0 61.363 0 63.0444V76.9556C0 78.637 1.36304 80 3.04444 80H16.9556C17.763 80 18.5374 79.6792 19.1083 79.1083C19.6792 78.5374 20 77.763 20 76.9556V63.0444C20 62.237 19.6792 61.4626 19.1083 60.8917C18.5374 60.3208 17.763 60 16.9556 60ZM4 69H2V67H4V69ZM4 71H2V73H4V71ZM18 69H16V67H18V69ZM18 71H16V73H18V71ZM18 62.74V64H16V62H17.26C17.4563 62 17.6445 62.078 17.7833 62.2167C17.922 62.3555 18 62.5437 18 62.74ZM4 62H2.74C2.54374 62 2.35552 62.078 2.21674 62.2167C2.07796 62.3555 2 62.5437 2 62.74V64H4V62ZM2 77.26V76H4V78H2.74C2.54374 78 2.35552 77.922 2.21674 77.7833C2.07796 77.6445 2 77.4563 2 77.26ZM17.26 78C17.6687 78 18 77.6687 18 77.26V76H16V78H17.26Z" fill="#5A698F" />
            <path d="M17.3866 180C17.5893 180 17.7832 180.04 17.9683 180.119C18.2591 180.234 18.4904 180.414 18.6623 180.661C18.8341 180.908 18.92 181.181 18.92 181.481V198.519C18.92 198.819 18.8341 199.092 18.6623 199.339C18.4904 199.586 18.2591 199.766 17.9683 199.881C17.8008 199.952 17.607 199.987 17.3866 199.987C16.9636 199.987 16.5979 199.846 16.2895 199.564L10.46 193.959L4.63054 199.564C4.31328 199.855 3.94757 200 3.53338 200C3.33069 200 3.13681 199.96 2.95175 199.881C2.66094 199.766 2.42961 199.586 2.25777 199.339C2.08592 199.092 2 198.819 2 198.519V181.481C2 181.181 2.08592 180.908 2.25777 180.661C2.42961 180.414 2.66094 180.234 2.95175 180.119C3.13681 180.04 3.33069 180 3.53338 180H17.3866Z" fill="#5A698F" />
          </svg>

          <Link to="/index" class="profile-link">
            <img src={profil} />
          </Link>

        </div>

      </header>

      <main className="main">
        <div className="search-field">
          <img src={search} alt="" />
          <input type="text" name="" id="" className="search" placeholder='Search for movies or TV series'  />
        </div>
        <section className="trending" style={{ "overflow": "hidden" }}>
          <h2 className="section-title">Trending</h2>
          <div className="trending-movies">
            {
              trending.map(mov => {
                return (
                  <div className="trending-movie" style={{"display":{display}}}>
                    <div className="play-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.7125 6.7125 0 15 0C23.2875 0 30 6.7125 30 15C30 23.2875 23.2875 30 15 30C6.7125 30 0 23.2875 0 15ZM21 14.5L12 8V21L21 14.5Z" fill="white" />
                      </svg>
                      <span>Play</span>
                    </div>
                    <img src={mov.src} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className='svg'>
                      <circle opacity="0.500647" cx="16" cy="16" r="16" fill="#10141E" />
                      <path d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z" stroke="white" stroke-width="1.5" />
                    </svg>
                    <div className="texts">
                      <div className="desc">
                        <span className="year">{mov.year}</span> <div className="circle"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd" d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z" fill="white" />
                        </svg>
                        <span class="genre">{mov.genre}</span> <div className="circle"></div>
                        <span className="limit">{mov.limit}</span>
                      </div>
                      <h4 className="movie-name">{mov.name}</h4>
                    </div>

                  </div>
                )
              })
            }

          </div>
        </section>



        <section className="recommended">
          <h2 className="section-title">Recommended for you</h2>

          <div className="rec-films">
            {
                          
                              suggestedFIlms.map(film => {
                                  if (searchText.length === 0) {
                                    // document.querySelector(".trending").style.display = "block";
                                   
                                      return (
                                          <div className="rec-film">
                                              <div className="rec-play-btn">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.7125 6.7125 0 15 0C23.2875 0 30 6.7125 30 15C30 23.2875 23.2875 30 15 30C6.7125 30 0 23.2875 0 15ZM21 14.5L12 8V21L21 14.5Z" fill="white" />
                                                  </svg>
                                                  <span>Play</span>
                                              </div>
                                              <div className="rec-film-img">
                                                  <img src={film.src} alt="" />
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                      <circle opacity="0.500647" cx="16" cy="16" r="16" fill="#10141E" />
                                                      <path d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z" stroke="white" stroke-width="1.5" />
                                                  </svg>
                                              </div>
                                              <div className="desc">
                                                  <span className="year">{film.year}</span> <div className="circle"></div>
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                      <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd" d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z" fill="white" />
                                                  </svg>
                                                  <span class="genre">{film.genre}</span> <div className="circle"></div>
                                                  <span className="limit">{film.limit}</span>
                                              </div>
                                              <h4 className="rec-title">{film.name}</h4>
                                          </div>
                                      )
                                  } else {
                                      // document.querySelector(".trending").style.display = "none";
                                      
                                      if (film.name.toLowerCase().includes(searchText.toLowerCase())) {
                                          return (
                                              <div className="rec-film">
                                                  <div className="rec-play-btn">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15C0 6.7125 6.7125 0 15 0C23.2875 0 30 6.7125 30 15C30 23.2875 23.2875 30 15 30C6.7125 30 0 23.2875 0 15ZM21 14.5L12 8V21L21 14.5Z" fill="white" />
                                                      </svg>
                                                      <span>Play</span>
                                                  </div>
                                                  <div className="rec-film-img">
                                                      <img src={film.src} alt="" />
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                          <circle opacity="0.500647" cx="16" cy="16" r="16" fill="#10141E" />
                                                          <path d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z" stroke="white" stroke-width="1.5" />
                                                      </svg>
                                                  </div>
                                                  <div className="desc">
                                                      <span className="year">{film.year}</span> <div className="circle"></div>
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                          <path opacity="0.75" fill-rule="evenodd" clip-rule="evenodd" d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z" fill="white" />
                                                      </svg>
                                                      <span class="genre">{film.genre}</span> <div className="circle"></div>
                                                      <span className="limit">{film.limit}</span>
                                                  </div>
                                                  <h4 className="rec-title">{film.name}</h4>
                                              </div>
                                          )
                                      }
                                  }
                              })
                          }
            

          </div>
        </section>
      </main>

    </div>
  )
}
