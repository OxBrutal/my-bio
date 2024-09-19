import { NowPlaying } from "../components";
import Image from "next/image";
import Banners from "../components/Banner";

const name = "KOI";
const belowLink = "いつか、私がヒトじゃなくなっても";
/*const bio = "Blogger | Dreamer | Observer 🗿";*/

const twitter = "https://twitter.com/neekoi_";
const instagram = "https://instagram.com/neekoi_";
const github = "https://github.com/neekoi_";
const spotify = "https://open.spotify.com/user/31x26y6mbrwjpxkl64skncmykrbu";
const pinterest = "https://id.pinterest.com/neekoi_";
const BuyMeACoffee = "https://saweria.co/neekoi_";
const discord = "https://discordapp.com/users/937249509694656513";
const discordchannel = "https://discordapp.com/users/937249509694656513";
const discordTag = "Koi#2227";

function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex min-h-screen flex-col bg-primary">
          <div
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            className="h-60 w-full bg-banner"
          />
          <div className="mx-auto -mt-20 flex w-full max-w-2xl flex-1 flex-col items-center px-0 sm:px-10">
            <div className="relative mb-6 flex w-full flex-col justify-center bg-opacity-90 px-2 sm:min-h-full sm:rounded-lg sm:px-6">
              <div className="flex flex-col items-center justify-center rounded-md p-2 py-4">
                <div className="relative">
                  <Image
                    className="h-64 w-64 rounded-full border-4 border-solid border-primary bg-primary object-cover"
                    src="/profile.png"
                    alt="profile"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="relative flex flex-row items-center justify-center">
                  <div className="mb-1 flex flex-col">
                    <div className="mt-1 flex flex-row items-center justify-center">
                      <span className="flex text-center text-2xl font-bold leading-tight text-zinc-300">
                        {name}
                      </span>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-1 h-5 w-5 text-indigo-600"
                        >
                          <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-400 dark:text-gray-500">
                      <a
                      // rel="noopener noreferrer nofollow"
                      // target="_blank"
                      // href=""
                      >
                        {belowLink}
                      </a>
                    </p>
                    {/*<div className="mt-3 flex flex-col">
                      <p className="inline-block whitespace-pre-wrap text-center text-sm text-gray-500 dark:text-gray-400">
                        {bio}
                      </p>
                    </div>*/}
                  </div>
                </div>
                <div className="mt-3">
                  <Banners />
                </div>
                <div className="mt-1 rounded pt-2">
                  <div>
                    <div className="flex flex-row flex-wrap  items-center justify-center">
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_self"
                        href={twitter}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          className="h-6 fill-current text-primary transition-all dark:text-gray-200"
                          role="img"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Twitter</title>
                          <path
                            d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                            fill="#55ACEE"
                          />
                          <path
                            d="M23.2812 19.5075L23.3316 20.338L22.4922 20.2363C19.4369 19.8465 16.7677 18.5245 14.5013 16.3043L13.3934 15.2027L13.108 16.0162C12.5036 17.8297 12.8897 19.7448 14.1488 21.0328C14.8203 21.7447 14.6692 21.8464 13.5109 21.4227C13.108 21.2871 12.7554 21.1854 12.7219 21.2362C12.6044 21.3549 13.0073 22.8971 13.3262 23.5073C13.7627 24.3547 14.6524 25.1851 15.6261 25.6766L16.4487 26.0664L15.475 26.0834C14.5349 26.0834 14.5013 26.1003 14.6021 26.4562C14.9378 27.5578 16.264 28.7273 17.7413 29.2357L18.7822 29.5916L17.8756 30.1339C16.5326 30.9136 14.9546 31.3542 13.3766 31.3881C12.6211 31.4051 12 31.4728 12 31.5237C12 31.6932 14.0481 32.6423 15.24 33.0151C18.8157 34.1167 23.063 33.6422 26.2526 31.761C28.5189 30.4221 30.7852 27.7612 31.8428 25.1851C32.4136 23.8123 32.9844 21.304 32.9844 20.1007C32.9844 19.3211 33.0347 19.2194 33.9748 18.2873C34.5288 17.7449 35.0492 17.1517 35.15 16.9823C35.3178 16.6603 35.3011 16.6603 34.4449 16.9484C33.018 17.4568 32.8165 17.389 33.5216 16.6264C34.042 16.084 34.6631 15.101 34.6631 14.8129C34.6631 14.7621 34.4113 14.8468 34.1259 14.9993C33.8238 15.1688 33.1523 15.423 32.6486 15.5756L31.7421 15.8637L30.9195 15.3044C30.4663 14.9993 29.8283 14.6604 29.4926 14.5587C28.6364 14.3214 27.327 14.3553 26.5548 14.6265C24.4563 15.3892 23.1301 17.3551 23.2812 19.5075Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_self"
                        href={instagram}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          className="h-6 fill-current text-pink-400 transition-all"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Instagram</title>
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_self"
                        href={spotify}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          className="h-6 fill-current text-green-400"
                          role="img"
                          viewBox="0 0 64 64"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Spotify</title>
                          <path d="M32 0C14.3 0 0 14.337 0 32c0 17.7 14.337 32 32 32 17.7 0 32-14.337 32-32S49.663 0 32 0zm14.68 46.184c-.573.956-1.797 1.223-2.753.65-7.532-4.588-16.975-5.62-28.14-3.097-1.07.23-2.14-.42-2.37-1.49s.42-2.14 1.49-2.37c12.196-2.79 22.67-1.606 31.082 3.556a2 2 0 0 1 .688 2.753zm3.9-8.717c-.726 1.185-2.256 1.53-3.44.84-8.602-5.276-21.716-6.805-31.885-3.747-1.338.382-2.714-.344-3.097-1.644-.382-1.338.344-2.714 1.682-3.097 11.622-3.517 26.074-1.835 35.976 4.244 1.147.688 1.49 2.217.765 3.403zm.344-9.1c-10.323-6.117-27.336-6.69-37.2-3.708-1.568.497-3.25-.42-3.747-1.988s.42-3.25 1.988-3.747c11.317-3.44 30.127-2.753 41.98 4.282 1.415.84 1.873 2.676 1.032 4.09-.765 1.453-2.638 1.912-4.053 1.07z"></path>
                        </svg>
                      </a>
                      <div className="flex items-center">
                        <div className="mx-auto inline-block">
                          <div id="snackbar">Copied to clipboard</div>
                          <div
                            onClick={myFunction}
                            // onClick={() => {
                            //   navigator.clipboard.writeText(discordTag);
                            // }}
                            onClickCapture={() => {
                              navigator.clipboard.writeText(discordTag);
                            }}
                            className="flex cursor-pointer items-center justify-center space-x-2 rounded-full border-white border-opacity-10 px-2 py-2 hover:bg-white hover:bg-opacity-5"
                          >
                            <svg
                              className="h-5 fill-current text-indigo-500"
                              role="img"
                              viewBox="0 0 24 24"
                              fill="#7289DA"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Discord</title>
                              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                            </svg>
                            <p className="text-sm font-medium text-indigo-100">
                              {<a href={discordchannel}>{discordTag}</a>}
                              {/*{discordTag}*/}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="max-w-s mt-1 w-full space-y-2">
                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="https://chat.whatsapp.com/GIdysPCksprBmGXtTHNS3i"
                            target="_self"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> 🕊️ </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                  <span
                                      title="Api"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      Join Grup Bot
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 flex justify-center">
                      <div className="flex items-center justify-center rounded-full bg-primary bg-opacity-90 text-xs font-medium text-banner"></div>
                      <div className="max-w-s mt-1 w-full space-y-2">
                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="https://whatsapp.com/channel/0029VaA4Tmw72WTpKVP8f33G"
                            target="_self"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> 🕊️ </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="♡"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      Saluran WhatsApp
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="https://www.subs4unlock.id/lfYt1W"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> 🔥 </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="♡"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      Download Lumine-MD V6.0
                                    </span>
                                    <span
                                      title=""
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      Ikuti link sampai 3x
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </a>
                        </div>
                    <div className="flex items-center justify-center rounded-full bg-primary bg-opacity-90 text-xs font-medium text-banner"></div>
                    <div className="mb-4 flex justify-center"></div>
                  </div>
                </div>
                <NowPlaying />
              </div>
            </div>
          </div>
          <div className="mb-4 flex justify-center">
            <div className="flex items-center justify-center rounded-full bg-primary bg-opacity-90 text-xs font-medium text-banner">
              <footer>
                <div className="container mx-auto text-center">
                コイ
                  <p className="text-gray text-s">
                    © 2023 - Somewhen, Somewhere.
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
