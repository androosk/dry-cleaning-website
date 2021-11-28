import React from 'react';
import Ties from '../../assets/scarves-4128126_640.jpg';
import Shirts from '../../assets/shirts-591750_640.jpg';
import Households from '../../assets/jordan-bigelow-53BjYSxca5g-unsplash.jpg'

const OurServices = () => {
  return (
    <section className="container w-10/12 mx-auto py-12 bg-primary flex flex-wrap justify-center">
      <div className="w-1/3">
        <img className="w-3/4 rounded-full mx-auto" src={Ties} alt="images of ties and cufflinks"/>
        <p className="text-center font-montserrat mt-7 text-xl">Fine Dry Cleaning</p>
        <p className="text-center font-montserrat font-thin py-6 px-8">Tirpok Cleaners offers the finest dry cleaning services you’ll find. Our attention to detail and complete expertise ensure can trust us with your entire wardrobe.</p>
      </div>
      <div className="w-1/3">
        <img className="w-3/4 rounded-full mx-auto" src={Shirts} alt="images of ties and cufflinks"/>
        <p className="text-center font-montserrat mt-7 text-xl">Platinum Shirt Laundry</p>
        <p className="text-center font-montserrat font-thin py-6 px-8">We guarantee that your buttons will be replaced if cracked or broken, whites will be white, colors bright and all removable stains gone</p>
      </div>
      <div className="w-1/3">
        <img className="w-3/4 rounded-full mx-auto" src={Households} alt="images of ties and cufflinks"/>
        <p className="text-center font-montserrat mt-7 text-xl">Blankets, Bedspreads and More</p>
        <p className="text-center font-montserrat font-thin py-6 px-8">Let us take care of your larger items and downs. They'll come back to you clean, fluffy and fresh every time without the hassle of overloading your washer or spending the day at the laundromat</p>
      </div>
      <div className="w-1/3">
        <img className="w-3/4 rounded-full mx-auto" src={Households} alt="images of ties and cufflinks"/>
        <p className="text-center font-montserrat mt-7 text-xl">Blankets, Bedspreads and More</p>
        <p className="text-center font-montserrat font-thin py-6 px-8">Let us take care of your larger items and downs. They'll come back to you clean, fluffy and fresh every time without the hassle of overloading your washer or spending the day at the laundromat</p>
      </div>
    </section>
  )
};
export default OurServices
