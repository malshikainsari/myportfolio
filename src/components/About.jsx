import { motion } from "framer-motion";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/400x400"
                alt="Profile"
                className="rounded-lg w-full"
              />
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={item}
              className="text-2xl font-semibold mb-4"
            >
              Who am I?
            </motion.h3>
            <motion.p
              variants={item}
              className="text-gray-600 mb-4 leading-relaxed"
            >
              I'm a passionate frontend developer with 3+ years of experience
              creating modern web applications. I specialize in React, JavaScript,
              and building responsive, user-friendly interfaces.
            </motion.p>
            <motion.p
              variants={item}
              className="text-gray-600 mb-6 leading-relaxed"
            >
              My journey in web development started when I was in college, and
              since then I've worked on various projects ranging from small
              business websites to complex web applications.
            </motion.p>
            <motion.div variants={item} className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">
                  <span className="text-primary">Name:</span> John Doe
                </p>
                <p className="font-medium">
                  <span className="text-primary">Email:</span> john@example.com
                </p>
              </div>
              <div>
                <p className="font-medium">
                  <span className="text-primary">From:</span> San Francisco, USA
                </p>
                <p className="font-medium">
                  <span className="text-primary">Freelance:</span> Available
                </p>
              </div>
            </motion.div>
            <motion.div variants={item} className="mt-8">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium inline-block"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;