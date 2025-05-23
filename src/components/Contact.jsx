import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const Contact = () => {
  const contactItems = [
    {
      icon: <FiMail className="text-purple-400" />,
      title: "Email",
      value: "malshikainsari89@gmail.com",
      link: "mailto:malshikainsari89@gmail.com"
    },
    {
      icon: <FiPhone className="text-purple-400" />,
      title: "Phone",
      value: "+94 769401474",
      link: "tel:+94769401474"
    },
    {
      icon: <FiMapPin className="text-purple-400" />,
      title: "Location",
      value: "Colombo, Sri Lanka"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/malshikainsari",
      icon: <FiGithub />
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/malshikainsari",
      icon: <FiLinkedin />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/__malshika__",
      icon: <FiInstagram />
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Contact Info */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-purple-300">
              Let's work together
            </h3>
            
            <p className="text-slate-300 leading-relaxed">
              I'm currently available for freelance projects or full-time opportunities. 
              Feel free to reach out if you'd like to collaborate or just say hello!
            </p>

            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="p-3 rounded-lg bg-slate-800 text-purple-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-300 mb-1">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-300">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Social Links */}
          <motion.div 
            className="w-full lg:w-1/2 bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-slate-700/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Connect With Me</h3>
            
            <p className="text-slate-300 mb-8">
              Follow me on social media to stay updated with my latest projects and work.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors border border-slate-700/50"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-2 rounded-md bg-purple-900/20 text-purple-400">
                    {social.icon}
                  </div>
                  <span className="text-slate-300">{social.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-slate-700/30">
  <a 
    href="mailto:malshikainsari89@gmail.com" 
    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 text-white font-medium hover:from-purple-600 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
  >
    <FiMail className="text-white" />
    <span className="text-white">Send me an email</span>
  </a>
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;