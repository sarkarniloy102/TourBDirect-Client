

const Blogs = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
          <img src="https://i.ibb.co/j5QRS8x/blog1.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Explore the Beauty of Bangladesh</h3>
            <span className="text-xs dark:text-gray-400">February 19, 2021</span>
            <p>Discover the mesmerizing beauty of Bangladesh with TourBDirect. We showcase the most enchanting destinations, providing you with travel inspiration and insights to plan your next adventure.</p>
          </div>
        </a>

        {/* Posts Grid */}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Sample post - Update the content for each post */}
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/BqTWmWX/mangrove.png" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Sundarbans Adventure</h3>
              <span className="text-xs dark:text-gray-400">January 21, 2021</span>
              <p>Embark on an unforgettable journey through the Sundarbans, the largest mangrove forest in the world. Experience the unique wildlife and breathtaking landscapes.</p>
            </div>
          </a>

          {/* Additional Sample Posts */}
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/H2kbhWM/mahasthangar.jpg" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Historical Wonders of Bagerhat</h3>
              <span className="text-xs dark:text-gray-400">February 5, 2021</span>
              <p>Step back in time and explore the historical wonders of Bagerhat, a UNESCO World Heritage Site. Discover ancient mosques and structures with rich architectural heritage.</p>
            </div>
          </a>

          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/ynJZThs/hill.jpg" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Chittagong Hill Tracts</h3>
              <span className="text-xs dark:text-gray-400">March 15, 2021</span>
              <p>Embark on an adventurous journey to the Chittagong Hill Tracts. Explore the scenic landscapes, indigenous cultures, and vibrant traditions of this picturesque region.</p>
            </div>
          </a>

          {/* Add more posts as needed */}
          {/* ...

          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
            {/* Post content for another post */}
          {/* </a>

          ... */}
          </div>
          {/* End of Posts Grid */}
          
          {/* Load More Button */}
          <div className="flex justify-center">
            <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    );
  };

export default Blogs;
