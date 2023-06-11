import { Link } from "react-router-dom";
import { FaRedhat } from "react-icons/fa"
import watch from "../img/smart-watch.png"
import camera from "../img/camera.png"
import location  from "../img/location.png"
import image_1 from "../img/hotel-rooms/banner-images/banner_1.jpg";
import image_2 from "../img/hotel-rooms/banner-images/banner_2.jpg";
import image_3 from "../img/hotel-rooms/banner-images/banner_3.jpg";
import image_4 from "../img/hotel-rooms/banner-images/banner_4.jpg";
import image_5 from "../img/hotel-rooms/banner-images/banner_5.jpg";
import image_6 from "../img/hotel-rooms/resorts/resort_3.jpg";
import image_7 from "../img/hotel-rooms/resorts/resort_5.jpg";


export default function Hero() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Forget Busy Work, <br /> Start Next Vacation <FaRedhat />
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                We provide what you need to enjoy your holiday with family. Time to make another memorable moments
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src={image_1}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image_2}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image_3}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image_4}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image_5}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image_6}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image_7}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <Link
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Show Me Now
                </Link>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex flex-row">
                <img src={watch} alt="smart watch" width={40} />
                <p><span>80,409</span> travelers</p>
              </div>
              <div>
                <img src={camera} alt="camera" width={40} />
                <p><span>862</span> treasure</p>
              </div>
              <div>
                <img src={location} alt="location" width={40} />
                <p><span>1,492</span> cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  