import React, { useEffect, useRef, useState } from 'react';
import { 
  Zap, 
  Brain, 
  Dumbbell, 
  Leaf, 
  CheckCircle, 
  Star,
  User,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Menu,
  ShoppingCart,
  Send,
  Award,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Heart,
  Sparkles,
  ArrowRight
} from 'lucide-react';

function App() {
  const canRef = useRef<HTMLDivElement>(null);
  const canContainerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // 3D Can Animation
  useEffect(() => {
    const can = canRef.current;
    const canContainer = canContainerRef.current;
    
    if (!can || !canContainer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / centerY * -15;
      const rotateY = (x - centerX) / centerX * 15;
      
      can.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)`;
    };

    const handleMouseLeave = () => {
      can.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    };

    canContainer.addEventListener('mousemove', handleMouseMove);
    canContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      canContainer.removeEventListener('mousemove', handleMouseMove);
      canContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-rotating testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleProductClick = (productName: string) => {
    console.log('Product clicked:', productName);
    // Add cart functionality here
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 transition-all duration-300" style={{
        background: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 215, 0, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Logo placeholder - will be replaced with actual logo */}
              <img 
                src="/public/images.png" 
                alt="Shilajit Energy Drink Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold" style={{ 
                fontFamily: 'Orbitron, monospace',
                color: '#FFD700'
              }}>
                SHILAJIT ENERGY
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'products', 'distributors', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="hover:text-yellow-400 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('shop')}
                className="bg-gradient-to-r from-red-900 to-red-800 border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full font-semibold uppercase text-sm tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative flex items-center">
                  <ShoppingCart className="mr-2" size={16} />
                Shop Now
                </span>
              </button>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-yellow-400"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #4A0000 100%)'
      }}>
        {/* Video Background Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3')] bg-cover bg-center animate-pulse"></div>
        </div>

        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-yellow-400/5 to-transparent rounded-full"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-70"
              style={{
                left: `${10 + i * 10}%`,
                animation: `float 6s infinite ease-in-out ${i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className={`hero-text transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-black mb-6" style={{
              fontFamily: 'Orbitron, monospace',
              background: 'linear-gradient(45deg, #FFD700, #FFA500, #FF6347, #FFD700)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 3s ease-in-out infinite',
              filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))'
            }}>
              PURE <span className="text-yellow-400">ENERGY</span><br />
              UNLEASHED
            </h1>
            <div className="flex items-center mb-4 text-yellow-400">
              <Award className="mr-2" size={20} />
              <span className="text-sm font-semibold">Premium Himalayan Formula</span>
            </div>
            <p className="text-xl mb-8 text-gray-300">
              Experience the ancient power of Himalayan Shilajit in our premium energy drink. 
              Natural, powerful, and scientifically formulated for peak performance.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 mb-8">
              <div className="flex items-center text-sm text-gray-400">
                <Shield className="mr-2 text-green-400" size={16} />
                <span>100% Natural</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Users className="mr-2 text-blue-400" size={16} />
                <span>10K+ Happy Customers</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <TrendingUp className="mr-2 text-yellow-400" size={16} />
                <span>Lab Tested</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-red-900 to-red-800 border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative flex items-center">
                <ShoppingCart className="mr-2" size={20} />
                Order Now - $4.99
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="border-2 border-yellow-400/50 text-yellow-400 px-8 py-4 rounded-full font-semibold uppercase tracking-wide hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 flex items-center justify-center"
              >
                <Leaf className="mr-2" size={20} />
                Try Free Sample
              </button>
            </div>
            
            {/* Limited Time Offer Banner */}
            <div className="mt-8 p-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-yellow-400/30 rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-center text-center">
                <Clock className="mr-2 text-yellow-400" size={16} />
                <span className="text-yellow-400 font-bold text-sm">LIMITED TIME: </span>
                <span className="text-white text-sm ml-1">Free shipping on orders over $50 | Use code: ENERGY25</span>
              </div>
            </div>
          </div>
          
          <div 
            ref={canContainerRef}
            className={`flex items-center justify-center h-96 md:h-[500px] transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
            style={{ perspective: '1000px' }}
          >
            <div 
              ref={canRef}
              className="relative transition-transform duration-100 cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="absolute -inset-4 rounded-3xl opacity-60 animate-pulse"
                style={{
                  background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.3), rgba(255, 165, 0, 0.2), rgba(255, 99, 71, 0.2))',
                  filter: 'blur(20px)',
                  zIndex: -1
                }}
              />
              <img 
                src="https://i5.walmartimages.com/asr/ad308eac-2c07-4752-bd25-94059f530515.1255c043d9a4be75111baf62b96e51d0.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF" 
                alt="Orange Peach Energy Drink Can" 
                className="w-48 h-64 object-contain hover:scale-110 transition-transform duration-500"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(139, 0, 0, 0.4)) drop-shadow(0 0 40px rgba(255, 215, 0, 0.3))'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-black">
        {/* Floating Action Button for Quick Order */}
        <div className="fixed bottom-6 right-6 z-40">
          <button className="w-16 h-16 bg-gradient-to-r from-red-900 to-red-800 border-2 border-yellow-400 text-yellow-400 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group">
            <ShoppingCart className="group-hover:scale-125 transition-transform duration-300" size={24} />
          </button>
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20 rounded-full px-6 py-2 mb-6">
              <Sparkles className="mr-2 text-yellow-400" size={16} />
              <span className="text-yellow-400 text-sm font-semibold">Premium Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
            }}>
              OUR <span className="text-yellow-400">PRODUCTS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our range of premium Shilajit energy drinks, each crafted with the finest Himalayan ingredients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Strawberry Energy', img: 'https://m.media-amazon.com/images/I/61bI8rCWJ2L.jpg', desc: 'Sweet strawberry flavor with pure Himalayan Shilajit', price: '$4.99', originalPrice: '$6.99', badge: 'Popular', discount: '29% OFF' },
              { name: 'Orange Peach Energy', img: 'https://i5.walmartimages.com/asr/ad308eac-2c07-4752-bd25-94059f530515.1255c043d9a4be75111baf62b96e51d0.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF', desc: 'Refreshing orange peach blend with Shilajit power', price: '$4.99', originalPrice: '$6.99', badge: 'Best Seller', discount: '29% OFF' },
              { name: 'Mango Energy', img: 'https://m.media-amazon.com/images/I/51pFNeo7-ZL._UF1000,1000_QL80_.jpg', desc: 'Tropical mango flavor with energizing Shilajit', price: '$4.99', originalPrice: '$6.99', badge: 'New', discount: '29% OFF' },
              { name: 'Mix Energy', img: 'https://m.media-amazon.com/images/I/61U3o8kJFeL._UF1000,1000_QL80_.jpg', desc: 'Perfect blend of all flavors with pure Shilajit', price: '$5.99', originalPrice: '$7.99', badge: 'Premium', discount: '25% OFF' }
            ].map((product, index) => (
              <div 
                key={index}
                className="scroll-reveal cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:scale-105 group"
                onClick={() => handleProductClick(product.name)}
              >
                <div className="bg-gradient-to-br from-red-900/80 to-red-800/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/20 text-center h-full relative overflow-hidden group-hover:border-yellow-400/40 transition-all duration-300">
                  {/* Product Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {product.badge}
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.discount}
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="w-32 h-48 object-cover rounded-lg mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 relative z-10"
                  />
                  <h3 className="text-xl font-bold mb-3 text-yellow-400 relative z-10" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4 relative z-10">{product.desc}</p>
                  <div className="mb-6 relative z-10">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl font-bold text-yellow-400">{product.price}</span>
                      <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    <div className="text-green-400 text-sm font-semibold">You save ${(parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))).toFixed(2)}</div>
                  </div>
                  <button className="bg-gradient-to-r from-red-900 to-red-800 border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold uppercase text-sm tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300 w-full relative z-10 group/btn overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      <ShoppingCart className="mr-2" size={16} />
                      Add to Cart
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #4A0000 100%)'
      }}>
        <div className="container mx-auto px-6">
          {/* Before/After Comparison */}
          <div className="max-w-4xl mx-auto mb-20 scroll-reveal">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/20">
              <h3 className="text-3xl font-bold text-center mb-8 text-yellow-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                FEEL THE DIFFERENCE
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">😴</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-red-400">Before Shilajit Energy</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Low energy levels</li>
                    <li>• Mental fog and fatigue</li>
                    <li>• Poor workout performance</li>
                    <li>• Afternoon energy crashes</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-yellow-400">After Shilajit Energy</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Sustained natural energy</li>
                    <li>• Sharp mental clarity</li>
                    <li>• Enhanced physical strength</li>
                    <li>• All-day vitality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
            }}>
              POWERFUL <span className="text-yellow-400">BENEFITS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the ancient wisdom of Shilajit combined with modern energy drink technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Instant Energy', desc: 'Natural energy boost without crashes', stat: '300% more energy' },
              { icon: Brain, title: 'Mental Clarity', desc: 'Enhanced focus and cognitive function', stat: '85% better focus' },
              { icon: Dumbbell, title: 'Physical Strength', desc: 'Improved stamina and endurance', stat: '40% more stamina' },
              { icon: Leaf, title: 'Natural Ingredients', desc: 'Pure Himalayan Shilajit and herbs', stat: '100% natural' }
            ].map((benefit, index) => (
              <div key={index} className="text-center scroll-reveal group">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110 relative">
                  <benefit.icon size={32} className="text-black" />
                  <div className="absolute -inset-2 bg-yellow-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-yellow-400">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.desc}</p>
                <div className="mt-3 text-yellow-400 font-bold text-sm">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <div className="inline-flex items-center bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/20 rounded-full px-6 py-2 mb-6">
              <Heart className="mr-2 text-green-400" size={16} />
              <span className="text-green-400 text-sm font-semibold">Customer Love</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
            }}>
              CUSTOMER <span className="text-yellow-400">REVIEWS</span>
            </h2>
          </div>
          
          {/* Enhanced Testimonials with Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {[
                  { name: 'Ahmed Khan', review: 'Amazing energy boost! I feel more focused and energized throughout the day. The taste is incredible too.', rating: 5, location: 'Karachi, Pakistan' },
                  { name: 'Sarah Ali', review: 'Best energy drink I\'ve ever tried. Natural ingredients and no crash afterwards. Highly recommended!', rating: 5, location: 'Lahore, Pakistan' },
                  { name: 'Muhammad Hassan', review: 'Perfect for my workout sessions. The Shilajit really makes a difference in my performance and recovery.', rating: 5, location: 'Islamabad, Pakistan' }
                ].map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-sm rounded-2xl p-12 border border-yellow-400/20 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                        <User className="text-black" size={32} />
                      </div>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} fill="currentColor" className="text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-xl text-gray-300 mb-6 italic">"{testimonial.review}"</p>
                      <h4 className="font-bold text-yellow-400 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Testimonial Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-yellow-400 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mt-20">
            {[
              { icon: Users, number: '10,000+', label: 'Happy Customers' },
              { icon: Award, number: '99.9%', label: 'Satisfaction Rate' },
              { icon: Clock, number: '24/7', label: 'Customer Support' },
              { icon: Shield, number: '100%', label: 'Natural Formula' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center scroll-reveal"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-black" size={24} />
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distributors Section */}
      <section id="distributors" className="py-20" style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #4A0000 100%)'
      }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
            }}>
              BECOME A <span className="text-yellow-400">DISTRIBUTOR</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our growing network of distributors and bring the power of Shilajit Energy to your community
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="scroll-reveal">
                <h3 className="text-3xl font-bold mb-6 text-yellow-400">Partnership Benefits</h3>
                <ul className="space-y-4">
                  {[
                    'Exclusive territory rights',
                    'Marketing support and materials',
                    'Competitive wholesale pricing',
                    'Training and product education'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-yellow-400 mr-4" size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-gradient-to-r from-red-900 to-red-800 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold uppercase tracking-wide hover:shadow-lg transition-all duration-300 mt-8">
                  Apply Now
                </button>
              </div>
              
              <div className="scroll-reveal">
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-8 border border-yellow-400/20">
                  <h4 className="text-2xl font-bold mb-6 text-yellow-400">Contact Information</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="text-yellow-400 mr-4" />
                      <span>distributors@shilajitenergydrinks.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-yellow-400 mr-4" />
                      <span>+92 300 1234567</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-yellow-400 mr-4" />
                      <span>Lahore, Pakistan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
            }}>
              ABOUT <span className="text-yellow-400">US</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="scroll-reveal">
                <h3 className="text-3xl font-bold mb-6 text-yellow-400">Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  At Shilajit Energy Drinks, we're committed to bringing you the purest, most potent energy drinks 
                  made with authentic Himalayan Shilajit. Our mission is to provide natural, sustainable energy 
                  solutions that enhance your daily performance.
                </p>
                <p className="text-gray-300 mb-6">
                  We source our Shilajit directly from the pristine mountains of the Himalayas, ensuring the highest 
                  quality and purity in every bottle. Our state-of-the-art manufacturing process preserves the natural 
                  benefits while creating a delicious, refreshing energy drink.
                </p>
                <button className="bg-gradient-to-r from-red-900 to-red-800 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold uppercase tracking-wide hover:shadow-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
              
              <div className="scroll-reveal">
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-2xl p-8 border border-yellow-400/20">
                  <h4 className="text-2xl font-bold mb-6 text-yellow-400">Why Choose Us?</h4>
                  <ul className="space-y-4">
                    {[
                      { icon: '🏔️', text: 'Authentic Himalayan Shilajit sourcing' },
                      { icon: '🧪', text: 'Scientific formulation and testing' },
                      { icon: '🏆', text: 'Premium quality assurance' },
                      { icon: '❤️', text: 'Customer satisfaction guarantee' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-400 mr-4 text-xl">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #4A0000 100%)'
      }}>
        {/* Live Chat Widget */}
        <div className="fixed bottom-6 left-6 z-40">
          <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
            <span className="hidden md:block font-semibold">Live Chat</span>
          </button>
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
            }}>
              GET IN <span className="text-yellow-400">TOUCH</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our products? Want to become a distributor? We'd love to hear from you!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="scroll-reveal">
                <div className="bg-gradient-to-br from-green-600/10 to-blue-600/10 border border-green-400/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-green-400">
                    <Clock className="mr-2" size={16} />
                    <span className="text-sm font-semibold">Average Response Time: 2 hours</span>
                  </div>
                </div>
                <form className="space-y-6">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-4 bg-black/50 border border-yellow-400/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full p-4 bg-black/50 border border-yellow-400/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                  <input 
                    type="tel" 
                    placeholder="Your Phone" 
                    className="w-full p-4 bg-black/50 border border-yellow-400/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                  <textarea 
                    rows={5}
                    placeholder="Your Message" 
                    className="w-full p-4 bg-black/50 border border-yellow-400/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none resize-none transition-colors"
                  />
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-red-900 to-red-800 border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold uppercase tracking-wide hover:shadow-lg transition-all duration-300 w-full group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
                    <span className="relative flex items-center justify-center">
                      <Send className="mr-2" size={16} />
                      Send Message
                    </span>
                  </button>
                </form>
              </div>
              
              <div className="scroll-reveal">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-yellow-400">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <MapPin className="text-yellow-400 mr-4" size={20} />
                        <div>
                          <h4 className="font-bold">Address</h4>
                          <p className="text-gray-300">123 Energy Street, Lahore, Pakistan</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="text-yellow-400 mr-4" size={20} />
                        <div>
                          <h4 className="font-bold">Phone</h4>
                          <p className="text-gray-300">+92 300 1234567</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="text-yellow-400 mr-4" size={20} />
                        <div>
                          <h4 className="font-bold">Email</h4>
                          <p className="text-gray-300">info@shilajitenergydrinks.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-yellow-400">Follow Us</h3>
                    <div className="flex space-x-4">
                      {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-colors"
                        >
                          <Icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-yellow-400/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                {/* Logo placeholder - will be replaced with actual logo */}
                <img 
                  src="/public/images.png" 
                  alt="Shilajit Energy Drink Logo" 
                  className="h-12 w-auto"
                />
                <span className="text-xl font-bold text-yellow-400" style={{ fontFamily: 'Orbitron, monospace' }}>
                  SHILAJIT ENERGY
                </span>
              </div>
              <p className="text-gray-300">Premium Himalayan Shilajit energy drinks for natural power and vitality.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Products', 'About Us', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">Customer Service</h4>
              <ul className="space-y-2">
                {['FAQ', 'Shipping Info', 'Returns', 'Support'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">Newsletter</h4>
              <p className="text-gray-300 mb-4">Subscribe for updates and special offers</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 p-3 bg-gray-800 border border-yellow-400/20 rounded-l-lg text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                />
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-r-lg font-bold hover:bg-yellow-500 transition-colors">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-yellow-400/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-300">&copy; 2024 Shilajit Energy Drinks. All rights reserved.</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 mr-4">We Accept:</span>
                {['VISA', 'MC', 'JC', 'EP', 'UP', 'PP'].map((payment, index) => (
                  <div 
                    key={index}
                    className="w-12 h-8 bg-white rounded flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <span className="text-xs font-bold text-gray-800">{payment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          50% { transform: translateY(-100px) rotate(180deg); opacity: 1; }
        }
        
        .scroll-reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }
        
        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Enhanced hover effects */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        
        /* Smooth transitions for all interactive elements */
        * {
          transition-property: transform, opacity, background-color, border-color, box-shadow;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}

export default App;