
const Overview = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1">
                <h3 className="text-2xl font-bold mb-4">Welcome to Our Tourism Guide</h3>
                <p className=" mb-4">
                    Discover the beauty of our destinations through immersive videos showcasing breathtaking landscapes and cultural experiences.
                </p>
                <p className=" mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor, est eget bibendum aliquet, est justo maximus justo, id commodo metus tortor eget elit.
                </p>
            </div>
            <div className="md:col-span-1">
                {/* Replace with your video component or embed the video */}
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/4FrPZoofdBQ?si=izn87yPbIhP4MsL9"
                    title="Overview Video"
                    //   frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
};

export default Overview;