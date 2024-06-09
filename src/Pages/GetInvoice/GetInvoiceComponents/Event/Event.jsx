import React from 'react'

const Event = () => {
  return (
    <>
      <section>
        <div className="text-center mb-10">
          <h1 className="text-3xl font-medium leading-normal">
            Upcoming Event
          </h1>
          <p className="text-sm text-blue-500 mb-5">
            Improve your skill with workshop
          </p>
          <img
            src="/assets/invoive-img/no-upcomming-event-img.png"
            className="mx-auto mb-5 "
            alt=""
          />
          <h1 className="text-3xl font-medium leading-normal">
            No Upcoming Workshop/Seminar
          </h1>
          <p className="text-sm text-blue-500">
            No event available. Now stay connected with us.
          </p>
        </div>
      </section>
    </>
  );
}

export default Event
