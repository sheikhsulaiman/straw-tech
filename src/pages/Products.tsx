import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Leaf,
  Package,
  Utensils,
  Home as HomeIcon,
  ArrowRight,
} from "lucide-react";

const Products = () => {
  const categories = [
    {
      icon: Utensils,
      name: "Food Packaging",
      description: "Biodegradable containers, plates, and cutlery",
    },
    {
      icon: ShoppingBag,
      name: "Shopping Bags",
      description: "Durable and eco-friendly carry bags",
    },
    {
      icon: Package,
      name: "Packaging Materials",
      description: "Sustainable packaging solutions for businesses",
    },
    {
      icon: HomeIcon,
      name: "Home Products",
      description: "Everyday items for sustainable living",
    },
  ];

  const products = [
    {
      name: "Eco Plates Set",
      category: "Food Packaging",
      price: "FREE",
      image: "/placeholder-product-1.jpg",
      alt: "Set of biodegradable plates made from rice straw with brand advertising",
      description:
        "Sturdy and biodegradable plates perfect for any occasion. 100% FREE!",
    },
    {
      name: "Straw Shopping Bags",
      category: "Shopping Bags",
      price: "FREE",
      image: "/placeholder-product-2.jpg",
      alt: "Reusable shopping bags made from processed rice straw with brand advertising",
      description:
        "Durable shopping bags that last for years. Completely FREE!",
    },
    {
      name: "Food Containers",
      category: "Food Packaging",
      price: "FREE",
      image: "/placeholder-product-3.jpg",
      alt: "Eco-friendly food storage containers from rice straw with brand advertising",
      description:
        "Keep your food fresh in eco-friendly containers. No cost to you!",
    },
    {
      name: "Cutlery Set",
      category: "Food Packaging",
      price: "FREE",
      image: "/placeholder-product-4.jpg",
      alt: "Biodegradable cutlery set including spoon, fork, and knife with brand advertising",
      description:
        "Complete cutlery set made from rice straw fibers. Totally FREE!",
    },
    {
      name: "Packaging Box",
      category: "Packaging Materials",
      price: "FREE",
      image: "/placeholder-product-5.jpg",
      alt: "Sturdy packaging box made from compressed rice straw with brand advertising",
      description:
        "Professional packaging for your business needs. Absolutely FREE!",
    },
    {
      name: "Home Storage Bins",
      category: "Home Products",
      price: "FREE",
      image: "/placeholder-product-6.jpg",
      alt: "Decorative storage bins crafted from natural rice straw",
      description: "Stylish storage solutions for your home.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              100% FREE <span className="text-green-600">Products</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              All our eco-friendly rice straw products are completely FREE!
              We're funded by advertising partnerships with eco-conscious
              brands. Get sustainable products at zero cost while supporting the
              environment.
            </p>
            <p className="text-lg text-green-600 font-semibold">
              No hidden fees • Free shipping • Advertisement-supported
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-green-50 p-6 rounded-xl text-center cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Explore our bestselling eco-friendly alternatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-64 bg-gray-300 overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <Leaf size={16} className="inline mr-1" />
                    Eco
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-green-600 font-semibold mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      {product.price}
                    </span>
                    <Button className="bg-green-600 hover:bg-green-700">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Products?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Leaf className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      100% Biodegradable
                    </h3>
                    <p className="text-gray-600">
                      All products decompose naturally within 90-180 days,
                      leaving no harmful residue.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Package className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Durable & Reliable
                    </h3>
                    <p className="text-gray-600">
                      Despite being eco-friendly, our products are strong and
                      suitable for daily use.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <ShoppingBag className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Supports Farmers
                    </h3>
                    <p className="text-gray-600">
                      Every purchase directly supports local farming communities
                      and creates jobs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-[500px] bg-gray-300 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder-why-choose.jpg"
                  alt="Rice straw products showcasing quality and sustainability"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get FREE Products or Advertise With Us
            </h2>
            <p className="text-xl text-green-50 mb-8">
              Want free eco-friendly products? Or interested in advertising your
              brand on sustainable products? Contact us for bulk orders,
              advertising partnerships, or distribution inquiries.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 text-lg"
              >
                Contact Us
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
