import React from 'react';

const cardData = [
  {
    title: "Audit",
    description: "A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts.",
    imgSrc: "https://img.freepik.com/free-vector/bill-analysis-concept-illustration_114360-19348.jpg?t=st=1742026250~exp=1742029850~hmac=3af1245abf61ae8aa99f33994faa2f764428f1fb7c51b16a69e49479203d5c23&w=826",
  },
  {
    title: "Audit",
    description: "A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts.",
    imgSrc: "https://img.freepik.com/free-vector/bill-analysis-concept-illustration_114360-19348.jpg?t=st=1742026250~exp=1742029850~hmac=3af1245abf61ae8aa99f33994faa2f764428f1fb7c51b16a69e49479203d5c23&w=826",
  },
  {
    title: "Audit",
    description: "A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts.",
    imgSrc: "https://img.freepik.com/free-vector/bill-analysis-concept-illustration_114360-19348.jpg?t=st=1742026250~exp=1742029850~hmac=3af1245abf61ae8aa99f33994faa2f764428f1fb7c51b16a69e49479203d5c23&w=826",
  },
  {
    title: "Audit",
    description: "A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts.",
    imgSrc: "https://img.freepik.com/free-vector/bill-analysis-concept-illustration_114360-19348.jpg?t=st=1742026250~exp=1742029850~hmac=3af1245abf61ae8aa99f33994faa2f764428f1fb7c51b16a69e49479203d5c23&w=826",
  },
  {
    title: "Audit",
    description: "A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts.",
    imgSrc: "https://img.freepik.com/free-vector/bill-analysis-concept-illustration_114360-19348.jpg?t=st=1742026250~exp=1742029850~hmac=3af1245abf61ae8aa99f33994faa2f764428f1fb7c51b16a69e49479203d5c23&w=826",
  },
  {
    title: "Audit",
    description: "A card component has a figure, a body part, and inside body there are title and actions parts. A card component has a figure, a body part, and inside body there are title and actions parts.",
    imgSrc: "https://img.freepik.com/free-vector/bill-analysis-concept-illustration_114360-19348.jpg?t=st=1742026250~exp=1742029850~hmac=3af1245abf61ae8aa99f33994faa2f764428f1fb7c51b16a69e49479203d5c23&w=826",
  },
  // Add more cards if needed
];

function WhatWeOffer() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 px-5">
      <h2 className="text-4xl font-bold relative group mb-12">
        What We Offer.
        <span
          className="absolute left-0 bottom-0 w-0 h-1 transition-all duration-300 group-hover:w-full"
          style={{ background: '#d35400' }}
        ></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card md:w-68 w-full cursor-pointer group transition-transform duration-300 transform hover:scale-105"
            style={{
              boxShadow: "0px 5px 15px rgba(13, 13, 23, 0.1)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow =
                "0px 5px 15px rgba(13, 13, 23, 0.1)")
            }
          >
            <div className="card-body px-12 py-3">
              <h2 className="card-title text-xl mb-2.5 font-bold relative group">
                {card.title}
                <span
                  className="absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-12"
                  style={{ background: '#d35400' }}
                ></span>
              </h2>
              <p>{card.description}</p>
              <div className="text-blue-700 relative group mt-3">
                Find out more &#x2192;
                <span
                  className="bg-blue-700 absolute left-0 bottom-0 w-0 h-0.5 group-hover:w-28"
                ></span>
              </div>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeOffer;
