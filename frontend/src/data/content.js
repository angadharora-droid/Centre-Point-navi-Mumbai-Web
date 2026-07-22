import logo from '../assets/images/logo.png'
import hero1 from '../assets/images/hero-1.jpg'
import hero2 from '../assets/images/hero-2.jpg'
import hero3 from '../assets/images/hero-3.jpg'
import hero4 from '../assets/images/hero-4.jpg'
import hero5 from '../assets/images/hero-5.jpg'
import hero6 from '../assets/images/hero-6.jpg'
import aboutImg from '../assets/images/about-1.jpg'
import room1 from '../assets/images/room-1.jpg'
import room2 from '../assets/images/room-2.jpg'
import dining1 from '../assets/images/dining-1.jpg'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'
import gallery5 from '../assets/images/gallery-5.jpg'
import gallery6 from '../assets/images/gallery-6.jpg'
import tripadvisorIcon from '../assets/images/tripadvisor.svg'

export const images = {
  logo,
  hero: [hero1, hero2, hero3, hero4, hero5, hero6],
  about: aboutImg,
  room1,
  room2,
  dining1,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  tripadvisor: tripadvisorIcon
}

export const bookingUrl =
  'https://app.axisrooms.com/beV2/searchHotel.html?paxInfo=2%7C0%7C%7C&allHotels=true&newBe=true&productId=167209&bookingEngineId=4807&rooms=1&searchId=-1&searchNumber=1'

export const careersUrl = 'https://careers.centrepointgroup.in/'

export const contactInfo = {
  address:
    'Building no.1, DC-1, Thane – Belapur Rd, beside Akshar Blue Chip IT Park, TTC Industrial Area, Estate, Turbhe, Navi Mumbai, Maharashtra 400705',
  phone1: '+91 844 844 3313',
  email: 'info.navimumbai@cpgh.in'
}

export const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' }
]

export const rooms = [
  {
    name: 'Premium Twin Bedroom',
    tag: 'Premium',
    img: room1,
    desc: 'Sleek, spacious twin-bed rooms with modern interiors, a workstation, and high-speed WiFi — built for the diligent business traveler.',
    size: '305 Sq Ft · Max Occupancy 2 Adults'
  },
  {
    name: 'Club Master Bedroom',
    tag: 'Club',
    img: room2,
    desc: 'An elegant master bedroom with a cozy lounge sofa, perfect for relaxing after a long day or entertaining guests in comfort.',
    size: '255 Sq Ft · Max Occupancy 2 Adults'
  }
]

export const diningVenues = [
  {
    name: 'Bougainvillea',
    img: dining1,
    desc: 'A vibrant atrium restaurant serving you all day — multi-cuisine dining amid warm, garden-inspired interiors.'
  }
]

export const amenities = [
  { name: 'Free WiFi' },
  { name: 'Left Luggage Room' },
  { name: 'Valet Parking' },
  { name: 'Concierge' }
]

export const amenityDetails = [
  { name: 'Free WiFi', img: gallery4, desc: 'High-speed wireless internet access throughout the hotel and in every room.' },
  { name: 'Social Lobby & Co-working Space', img: gallery4, desc: 'A vibrant lobby with co-working spaces, a mini library, massage chairs, and a 66" HD television.' },
  { name: 'Valet Parking', img: gallery1, desc: 'Complimentary valet parking for all resident and dining guests.' },
  { name: '24 Hour Room Service', img: room2, desc: 'Round-the-clock in-room dining and guest services.' },
  { name: 'Left Luggage Room', img: gallery3, desc: 'Secure storage for your luggage before check-in or after check-out.' },
  { name: 'Concierge', img: gallery1, desc: 'A dedicated team of guest relation associates ensuring a comfortable stay.' },
  { name: 'Laundry & Dry Cleaning', img: room1, desc: 'Same-day laundry and dry cleaning services available on request.' },
  { name: 'Secured Safety Lockers', img: room2, desc: 'In-room safety lockers to keep your valuables secure.' }
]

export const roomFeatures = [
  'Spacious rooms with modern interiors',
  'Cozy sofas',
  'Bathrooms with top of the line fittings and toiletries',
  '32" flat screen TV with updated channels',
  'Workstation with wireless high speed internet access',
  'Secured safety lockers',
  'Tea/Coffee making facilities with minibar'
]

export const diaries = [
  {
    title: 'Why Choose Hotel Centre Point',
    excerpt:
      'Hotel Centre Point in Navi Mumbai offers strategic location, modern amenities, and warm hospitality for a comfortable and convenient stay.',
    img: gallery5
  },
  {
    title: 'Dining at CPH',
    excerpt:
      'At Hotel Centre Point Navi Mumbai we’re passionate about providing an exceptional dining experience. Join us to discover the best places to eat in Mumbai!',
    img: dining1
  },
  {
    title: 'Luxurious Amenities at Hotel Centre Point',
    excerpt:
      'Whether you’re in town for business, leisure, or a special occasion, this hotel provides everything you need for a comfortable and luxurious stay.',
    img: gallery6
  }
]

export const stats = [
  { value: '67 reviews', label: 'on TripAdvisor', icon: 'tripadvisor' },
  { value: '40', label: 'Premium Rooms In 2 Categories' },
  { value: '2', label: 'Restaurants & Cafe & Lounge' },
  { value: '7,500', label: 'Sp.ft Of Mice Space' }
]

export const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, room1, room2, dining1, aboutImg]

export const factSheetUrl = '/downloads/centre-point-navi-mumbai-fact-sheet.pdf'
