"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Expert Instructors",
    description:
      "Our courses are led by world-class musicians and certified educators who bring years of real-world performance and teaching experience to every lesson. You'll learn the right techniques, directly from the pros.",
    image: "https://media.istockphoto.com/id/2221863561/photo/focused-male-instructor-explaining-music-sheet-to-young-pianist-before-hes-playing.jpg?s=612x612&w=0&k=20&c=rRczi2P91IeJzIXyit4p8Nb3aakZxR88iX00EQdkoqs=", // Instructor teaching music
  },
  {
    title: "Flexible Learning Schedule",
    description:
      "We understand that everyone learns at their own pace. Our platform offers 24/7 access to structured video lessons, allowing you to learn and practice anytime that fits your lifestyle — whether you're a student, a professional, or a hobbyist.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80", // Music practice at home
  },
  {
    title: "Personalized Progress & Feedback",
    description:
      "With interactive tools and practice submissions, you'll receive detailed feedback from instructors to help you continuously improve. We track your progress and tailor your learning path to suit your skill level and goals.",
    image: "https://media.istockphoto.com/id/2063599907/photo/hand-woman-and-doctor-with-empathy-support-and-advice-with-hospital-healthcare-service.jpg?s=612x612&w=0&k=20&c=PIpEac0pco6ew2dJGINJNn7BrBOsm6bPbAL_rh_nsa0=", // Online learning or feedback
  },
  {
    title: "Wide Range of Courses",
    description:
      "From classical piano to modern guitar, vocal training to music theory — our extensive library covers all skill levels and genres. Whether you're a complete beginner or a seasoned performer, there's something here for you.",
    image: "https://media.istockphoto.com/id/493511416/photo/shopping-musical-instruments.jpg?s=612x612&w=0&k=20&c=5mQXl17WsTeAuVN8qTE4PZPPy912QWYK8nw-pBZ2pvA=", // Different instruments
  },
  {
    title: "Supportive Music Community",
    description:
      "Join a thriving global community of music enthusiasts. Share your progress, attend live Q&A sessions, collaborate with peers, and get motivated by others on the same musical journey as you.",
    image: "https://media.istockphoto.com/id/1330980415/photo/young-man-playing-acoustic-guitar-for-his-friends-on-garden-party.jpg?s=612x612&w=0&k=20&c=qd23ZH2SmRCADte6ZMpwhZH0VfmLjmNOwI4C-elH5Ww=", // Group of musicians or community
  },
];


function WhyChooseUs() {
  return (
    <div className="w-full py-10 bg-white dark:bg-black sm:px-6 lg:px-8">
      <h1 className="text-3xl text-center font-bold mb-6 mt-6 text-gray-900 dark:text-white">
        Why Choose Our Music Courses?
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
