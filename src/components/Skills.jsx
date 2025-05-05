import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiPython, SiPhp, SiMongodb, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", icon: <FaReact className="text-cyan-400" size={24} /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" size={24} /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" size={24} /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" size={24} /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" size={24} /> },
      ]
    },
    {
      title: "Backend",
      color: "from-blue-500 to-cyan-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={24} /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-200" size={24} /> },
        { name: "Python", icon: <SiPython className="text-blue-400" size={24} /> },
        { name: "Java", icon: <FaJava className="text-red-500" size={24} /> },
        { name: "PHP", icon: <SiPhp className="text-purple-500" size={24} /> },
      ]
    },
    {
      title: "Database",
      color: "from-green-500 to-emerald-400",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" size={24} /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" size={24} /> },
        
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            My Tech Stack
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-all duration-300`} />
              
              <div className="relative h-full bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </span>
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ y: -5 }}
                      className="flex items-center space-x-3 p-3 bg-gray-700 bg-opacity-50 rounded-lg hover:bg-opacity-70 transition-all"
                    >
                      <div className="p-2 rounded-md bg-gray-800">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;