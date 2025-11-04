import { motion } from "framer-motion";
import { Target, Eye, Users, Award } from "lucide-react";

const About = () => {
  const stats = [
    { number: "10K+", label: "Products Sold", icon: Award },
    { number: "500+", label: "Farmers Helped", icon: Users },
    { number: "50T", label: "Straw Recycled", icon: Target },
    { number: "95%", label: "Carbon Reduced", icon: Eye },
  ];

  const team = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/placeholder-team-1.jpg",
      alt: "John Doe - Founder and CEO portrait",
    },
    {
      name: "Jane Smith",
      role: "Head of Operations",
      image: "/placeholder-team-2.jpg",
      alt: "Jane Smith - Head of Operations portrait",
    },
    {
      name: "Mike Johnson",
      role: "Chief Innovation Officer",
      image: "/placeholder-team-3.jpg",
      alt: "Mike Johnson - Chief Innovation Officer portrait",
    },
    {
      name: "Sarah Williams",
      role: "Sustainability Director",
      image: "/placeholder-team-4.jpg",
      alt: "Sarah Williams - Sustainability Director portrait",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">StrawTech</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to revolutionize sustainability by transforming
              agricultural waste into innovative, eco-friendly alternatives to
              plastic products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <stat.icon className="text-green-600" size={32} />
                  </div>
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-[400px] bg-white/10 rounded-2xl overflow-hidden">
                <img
                  src="/placeholder-mission.jpg"
                  alt="Rice straw being processed into eco-friendly materials"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="text-green-200" size={40} />
                <h2 className="text-4xl font-bold">Our Mission</h2>
              </div>
              <p className="text-xl text-green-50 leading-relaxed mb-6">
                To create a sustainable future by converting agricultural waste
                into valuable, eco-friendly products that replace harmful
                plastics and support local farming communities.
              </p>
              <p className="text-lg text-green-100 leading-relaxed">
                Every year, millions of tons of rice straw are burned,
                contributing to air pollution and climate change. We saw an
                opportunity to turn this problem into a solution by creating
                biodegradable alternatives to plastic products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="text-green-600" size={40} />
                <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                To be the global leader in sustainable agricultural waste
                transformation, inspiring a world where waste becomes wealth and
                environmental responsibility is the norm, not the exception.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where every product we create contributes
                to a cleaner planet, supports local economies, and proves that
                sustainable business practices can be both profitable and
                purposeful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <div className="relative w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="/placeholder-vision.jpg"
                  alt="Future vision of sustainable manufacturing facilities"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to creating a sustainable future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-64 bg-gray-300">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                StrawTech was founded in 2020 by a group of environmental
                engineers and agricultural scientists who witnessed the
                devastating effects of rice straw burning in farming
                communities. What started as a small research project quickly
                evolved into a full-fledged mission to revolutionize
                agricultural waste management.
              </p>
              <p>
                Our founders realized that rice straw, often considered waste,
                could be transformed into valuable raw material for creating
                biodegradable products. This insight led to years of research
                and development, resulting in our proprietary technology that
                converts rice straw into durable, eco-friendly alternatives to
                plastic.
              </p>
              <p>
                Today, we work with over 500 farmers across the region,
                providing them with an additional income source while reducing
                environmental pollution. Our products have replaced thousands of
                plastic items, and we're just getting started.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
