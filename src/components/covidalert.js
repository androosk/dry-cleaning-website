import React from 'react';
import Link from 'gatsby-link';

const CovidAlert = () => (
    <div className="p-4 bg-red-600">
      <p className="m-auto text-center text-white font-sans">COVID-19 INFORMATION <Link to ='/covid-policy/'className="underline font-bold">HERE</Link></p>
    </div>
  )


export default CovidAlert;