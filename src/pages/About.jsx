function About() {
  return (
    <>
      <div className="flex flex-col sm:flex-row pt-12 px-4 sm:px-32 bg-myYellow-100">
        {/* Text Section */}
        <div className="flex flex-col w-full sm:w-4/7 space-y-16">
          <div className="flex flex-col text-center sm:text-left space-y-4">
            <h1 className="font-bold font-hero text-3xl sm:text-6xl text-myYellow-900 leading-tight">
              🥝 About Us
            </h1>
            <h1 className="font-semibold text-2xl --font-sans">
              Welcome to Fr🍉itopia – Fruit That Loves You Back!
            </h1>
            <p className="test-start" >
              At Fruitopia, we believe that nature’s sweetest gifts should be
              celebrated, shared, and savored. Our mission is simple — to bring
              you fresh, premium-quality fruits that not only taste great but
              also love your body back with every bite.
            </p>
          </div>
          <div className="flex flex-col text-center sm:text-left space-y-4">
            <h1 className="font-bold font-hero text-3xl sm:text-6xl text-myYellow-900 leading-tight">
              🌿 Our Story
            </h1>
            <p>
              Born from a passion for healthy living and the vibrant colors of
              nature, Fruitopia started with one goal in mind:
            </p>
            <p className="text-lg border-l-6 border-myYellow-500 p-4">
              Make nutritious living joyful, delicious, and easy for everyone.
            </p>
            <p>
              We began as a small local fruit stand, handpicking the best
              harvests from local farms. Today, we’ve grown into a trusted
              source of top-quality fruits, delivered fresh to your doorstep —
              with the same love and care we started with.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative hidden ml-16 sm:block w-full lg:w-3/7 h-[400px] sm:h-[500px] md:h-[600px]">
          <img
            // ref={glitter1Ref}
            src="/images/gliter-1.png"
            alt="orange"
            className="absolute inset-0 z-20 w-12 h-12 object-cover"
          />
          <img
            // ref={chungwaRef}
            src="/images/apple.svg"
            alt="apple"
            className="absolute inset-0 z-10 ml-14 sm:ml-35 h-[300px] sm:h-[280px] md:h-[500px ] hover:bg-yellow-500 transition-all duration-300 ease-in-out object-cover hover:scale-105 hover:rotate-3 hover:shadow-lg hover:shadow-yellow-500/50"
          />
          <img
            src="/images/flower.png"
            alt="flower"
            className="absolute inset-0 z-0 mt-22 ml-20 sm:ml-20 h-[100px]  md:h-[340px] object-cover"
          />
          <img
            // ref={glitter2Ref}
            src="/images/glitter-2.png"
            alt="glitter"
            className="absolute z-20 mt-[28rem] ml-[12rem] md:ml-[24rem] w-10 h-10 object-cover"
          />
        </div>
      </div>

      {/* What makes us special */}
      <div className="relative">
        <div className="flex flex-col items-center my-24 h-128 justify-center space-y-6 py-32 px-4 bg-[linear-gradient(rgba(0,32,0,0.5),rgba(0,0,0,0.5)),url(/images/fruit-bg.jpg)] blur-[2px] bg-cover bg-center text-white">
        
      </div>
      <div className="flex flex-col absolute inset-0 sm:top-32 top-16 w-2/3 mx-auto sm:text-left space-y-4">
          <h1 className="font-bold font-hero text-3xl text-center sm:text-6xl text-myYellow-100 leading-tight">
            🍓 What Makes Us Special
          </h1>
          <ul className="list-disc list-inside text-lg sm:text-xl text-white space-y-2">
            <li>
              Farm-Fresh Goodness: We partner with trusted local farmers to
              ensure every fruit is harvested at peak ripeness.
            </li>
            <li>
              Sustainability First: We use eco-friendly packaging and support
              farming practices that are good for the planet.
            </li>
            <li>
              Health You Can Taste: Our fruits are rich in flavor, nutrients,
              and naturally free from preservatives or artificial treatments.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
