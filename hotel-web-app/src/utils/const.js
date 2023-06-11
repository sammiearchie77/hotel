import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'



// hero import images
import hero_image_1 from "../img/hotel-rooms/banner-images/banner_1.jpg"
import hero_image_2 from "../img/hotel-rooms/banner-images/banner_2.jpg"
import hero_image_3 from "../img/hotel-rooms/banner-images/banner_3.jpg"
import hero_image_4 from "../img/hotel-rooms/banner-images/banner_4.jpg"
import hero_image_5 from "../img/hotel-rooms/banner-images/banner_5.jpg"

// luxury image import
import luxury_image_1 from "../img/hotel-rooms/luxury/lux_1.jpg";
import luxury_image_2 from "../img/hotel-rooms/luxury/lux_2.png";
import luxury_image_3 from "../img/hotel-rooms/luxury/lux_3.jpg";
import luxury_image_4 from "../img/hotel-rooms/luxury/lux_4.jpg";

// suite image import
import suite_image_1 from "../img/hotel-rooms/suite/suite_1.jpg";
import suite_image_2 from "../img/hotel-rooms/suite/suite_2.jpg";
import suite_image_3 from "../img/hotel-rooms/suite/suite_3.jpg";
import suite_image_4 from "../img/hotel-rooms/suite/suite_4.jpg";

// modern image import
import modern_image_1 from "../img/hotel-rooms/modern/modern-1.jpg";
import modern_image_2 from "../img/hotel-rooms/modern/modern-2.jpg";
import modern_image_3 from "../img/hotel-rooms/modern/modern-3.jpg";
import modern_image_4 from "../img/hotel-rooms/modern/modern-4.jpg";

// standard image import
import standard_image_1 from "../img/hotel-rooms/standard/standard-1.jpg";
import standard_image_2 from "../img/hotel-rooms/standard/standard-2.jpg";
import standard_image_3 from "../img/hotel-rooms/standard/standard-3.jpg";
import standard_image_4 from "../img/hotel-rooms/standard/standard-4.jpg";

// investor image import
import investor_image_1 from "../img/investors-logo/logo-1.png";
import investor_image_2 from "../img/investors-logo/logo-2.png";
import investor_image_3 from "../img/investors-logo/logo-3.png";
import investor_image_4 from "../img/investors-logo/logo-4.png";
import investor_image_5 from "../img/investors-logo/logo-5.png";


export const MAX_WIDTH = "1500px";

// Hero
export const HeroContents = [
    { 
        id: 1,
        src: hero_image_1,
        alt: "banner image"
    },
    { 
        id: 2,
        src: hero_image_2,
        alt: "banner image"
    },
    { 
        id: 3,
        src: hero_image_3,
        alt: "banner image"
    },
    { 
        id: 4,
        src: hero_image_4,
        alt: "banner image"
    },
    { 
        id: 5,
        src: hero_image_5,
        alt: "banner image"
    },
];

export const rooms = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export const luxuryRooms = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: luxury_image_1,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: luxury_image_2,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: luxury_image_3,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: luxury_image_4,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
]

export const suitesRooms = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: suite_image_1,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: suite_image_2,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: suite_image_3,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: suite_image_4,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
]
export const modernRooms = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: modern_image_1,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: modern_image_2,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: modern_image_3,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: modern_image_4,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
]

export const standardRooms = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: standard_image_1,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: standard_image_2,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: standard_image_3,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: standard_image_4,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
]

export const standard = [
    {
      name: 'Push to deploy',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: LockClosedIcon,
    },
    {
      name: 'Simple queues',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Advanced security',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: FingerPrintIcon,
    },
  ]

export const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
  ]

export const investors = [
    {
        id: 1,
        logo: investor_image_1,
        alt: "investor logo"
    },
    {
        id: 2,
        logo: investor_image_2,
        alt: "investor logo"
    },
    {
        id: 3,
        logo: investor_image_3,
        alt: "investor logo"
    },
    {
        id: 4,
        logo: investor_image_4,
        alt: "investor logo"
    },
    {
        id: 5,
        logo: investor_image_5,
        alt: "investor logo"
    },
]