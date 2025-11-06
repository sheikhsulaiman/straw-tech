import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Leaf,
  Recycle,
  Globe,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Megaphone,
  Users,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Biodegradable",
      description:
        "Our products naturally decompose, leaving no harmful residue in the environment.",
    },
    {
      icon: Recycle,
      title: "Agricultural Waste Recycling",
      description:
        "Converting rice straw waste into valuable, sustainable products.",
    },
    {
      icon: Globe,
      title: "Free for Everyone",
      description:
        "All products are FREE. We're funded by eco-conscious brand advertisements.",
    },
  ];

  const benefits = [
    "Replace harmful plastic products",
    "Support local farmers",
    "Reduce agricultural waste burning",
    "Create sustainable jobs",
    "Combat climate change",
    "Preserve natural resources",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-4 px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold"
              >
                100% FREE Products
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Free Eco-Friendly Products,
                <span className="text-green-600"> Powered by Ads</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get 100% FREE sustainable rice straw products! We're
                revolutionizing eco-friendly living by partnering with brands
                who advertise on our products. Zero cost to you, zero harm to
                the planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-lg"
                  >
                    Explore Products
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] bg-gray-300 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}placeholder-hero.png`}
                  alt="Rice straw products displayed in natural environment"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">100%</p>
                    <p className="text-gray-600 text-sm">Eco-Friendly</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose StrawTech?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're revolutionizing the way we think about agricultural waste
              and plastic alternatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Making a Real Difference
              </h2>
              <p className="text-xl text-green-50 mb-8">
                Every product you choose helps create a positive impact on our
                planet and communities.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2
                      className="text-green-200 flex-shrink-0"
                      size={24}
                    />
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] bg-white/10 rounded-2xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}placeholder-impact.png`}
                  alt="Environmental impact of rice straw products"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advertising Business Model Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-[400px] bg-gray-300 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={`${import.meta.env.BASE_URL}placeholder-ad-space.png`}
                  alt="Products with brand advertisements printed on them"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advertise on Sustainable Products
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We make our products FREE by selling premium advertising space
                to eco-conscious brands. Your brand message on biodegradable
                products that reach thousands daily.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Megaphone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Premium Visibility
                    </h3>
                    <p className="text-gray-600">
                      Your brand on everyday items like plates, bags, and
                      containers seen by thousands.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <TrendingUp className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Eco-Conscious Audience
                    </h3>
                    <p className="text-gray-600">
                      Connect with environmentally aware consumers who value
                      sustainable brands.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Users className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Support Free Distribution
                    </h3>
                    <p className="text-gray-600">
                      Your advertising enables us to give away eco-friendly
                      products at no cost.
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-lg"
                >
                  Advertise With Us
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make a Change?
            </h2>
            <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
              Join thousands of eco-conscious individuals and businesses
              choosing sustainable alternatives.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 text-lg"
              >
                Get In Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
