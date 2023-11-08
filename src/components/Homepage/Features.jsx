import FeatureIcon from "../../assets/icons/features.svg";

const Features = () => {
  const features = [
    {
      title: "Interactive Learning",
      description: "Engage with peers in real-time discussions.",
    },
    {
      title: "Resource Sharing",
      description: "Share study materials and resources easily.",
    },
    {
      title: "Progress Tracking",
      description: "Monitor your study progress and achievements.",
    },
    {
      title: "Collaborative Projects",
      description: "Work together on group assignments and projects.",
    },
    {
      title: "Instant Feedback",
      description: "Receive feedback from peers and instructors quickly.",
    },
    {
      title: "Flexible Study Hours",
      description: "Join study sessions at your convenience.",
    },
    {
      title: "Discussion Forums",
      description: "Participate in topic-specific discussions with your peers.",
    },
  ];

  return (
    <section className="py-16">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-3 bg-gray-50 shadow-md rounded hover:scale-105 duration-75 ease-in border-t-8 border-primary"
            >
              <img src={FeatureIcon} alt="" className="h-12 w-12" />
              <h3 className="text-primary text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
