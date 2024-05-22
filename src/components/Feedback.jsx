"client";
import React from "react";

export const Feedback = () => {
  return (
    <div className="py-10 px-10 w-full h-full">
      <div className="bg-white w-[30%] h-auto p-4 space-y-4">
        <div>
          <div className="flex items-start justify-start space-x-4">
            <div className="w-[3rem] h-[3rem] border">
              <img src="" alt="" />
            </div>
            <div>
              <h1>Travis Scott</h1>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <p>
          Finding the perfect marketing conference can be overwhelming, but this
          platform made it a breeze! The personalized recommendations helped me
          discover a conference that perfectly aligned with my interests, and
          the community forum allowed me to connect with other attendees
          beforehand. It was an amazing experience!"
        </p>
      </div>
    </div>
  );
};
