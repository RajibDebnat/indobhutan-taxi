const Features = () => {
  const features = [
    {
      icon: "/car.webp",
      title: "Clean and Hygienic Car",
    },
    {
      icon: "/bill.png",
      title: "Transparent Billing",
    },
    {
      icon: "/chauffeur.png",
      title: "Expert Chauffeurs",
    },
    {
      icon: "/india.png",
      title: "Pan India & Bhutan Service",
    },
  ];

  return (
    <section className="bg-[#f2f9fd] py-10 px-4 md:px-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8">
        WHAT SETS <span className="text-blue-600">INDO-BHUTAN Travels</span> APART?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-blue-500 rounded-2xl p-6 shadow-md transition transform hover:scale-105"
          >
            <div className="bg-white p-4 rounded-full mb-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="h-12 w-12 rounded-2xl object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-white text-center">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
