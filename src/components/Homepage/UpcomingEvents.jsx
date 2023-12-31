import { motion } from "framer-motion";
import EventIcon from "../../assets/icons/events.svg";

const UpcomingEvents = () => {
  const events = [
    {
      title: "Study Session: Math Fundamentals",
      date: "November 15, 2023",
      time: "3:00 PM - 5:00 PM",
      location: "Online",
    },
    {
      title: "Webinar: Effective Time Management",
      date: "November 18, 2023",
      time: "6:00 PM - 7:30 PM",
      location: "Virtual",
    },
    {
      title: "Group Discussion: Literature Analysis",
      date: "November 20, 2023",
      time: "2:00 PM - 4:00 PM",
      location: "Online",
    },
  ];

  return (
    <section className="py-16">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 bg-secondary shadow-md rounded border-l-4 border-darkBlue border"
            >
              <img src={EventIcon} alt="" className="w-12 h-12" />
              <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Time: {event.time}</p>
              <p>Location: {event.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
