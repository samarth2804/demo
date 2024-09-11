import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import pharmaimg1 from '/pharmaimg1.jpg';
import pharmaimg2 from '/pharmaimg2.jpg';


export default function Home() {
  const [offerListings, setOfferListings] = useState([]);                               //hold 4 offer listings
  const [saleListings, setSaleListings] = useState([]);                                 //hold 4 sale listings
  const [rentListings, setRentListings] = useState([]);                                 //hold 4 rent listings
  SwiperCore.use([Navigation]);                                                         //to use image slider

  //fetch 4 offer,4 rent and 4 sale listings to show on homepage
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        //http get request to get 4 offer listings
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);                                                           //save the fetched data
        fetchRentListings();                                                              //fetch the rent listings data after the offer listings
      } catch (error) {
        console.log(error);
      }
    };

    //http get request to get 4 rent listings
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4&skip=1');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();                                                              //fetch the sale listings data after rent listings data
      } catch (error) {
        console.log(error);
      }
    };
    
    //http get request to get 4 sale listings
    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sell&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);                                                                                   //fecth only once after the render of homepage


  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Fast, Reliable <span className='text-slate-500'>Medicine</span>
          <br />
          at Your Doorstep
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
        Simplifying healthcare with fast deliveries, reliable service, and a wide range of trusted products
          <br />
          Your health.......just a click away
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div>

      {/* swiper */}
      <Swiper navigation>
            <SwiperSlide>
              <div
                style={{
                  background: `url(${pharmaimg1}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  background: `url(${pharmaimg2}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
              ></div>
            </SwiperSlide>
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sell'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
