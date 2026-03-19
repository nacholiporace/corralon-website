/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Menu, 
  X, 
  ChevronRight, 
  HardHat, 
  Truck, 
  ShieldCheck, 
  Phone,
  Hammer,
  BrickWall,
  PaintBucket,
  Layers,
  Wrench
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  { id: 1, name: 'Obra Gruesa', icon: BrickWall, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' },
  { id: 2, name: 'Terminaciones', icon: PaintBucket, image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800' },
  { id: 3, name: 'Herramientas', icon: Hammer, image: 'https://images.unsplash.com/photo-1530124560676-44bc9141f0c6?auto=format&fit=crop&q=80&w=800' },
  { id: 4, name: 'Sanitarios', icon: Wrench, image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
  { id: 5, name: 'Electricidad', icon: Layers, image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 border-b border-zinc-200' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
            <HardHat className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-zinc-900' : 'text-white'}`}>CORRALÓN<span className="text-amber-500">ELITE</span></span>
        </div>

        <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors ${isScrolled ? 'text-zinc-600' : 'text-white/80'}`}>
          <a href="#" className="hover:text-amber-600 transition-colors">Inicio</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Productos</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Proyectos</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Contacto</a>
        </div>

        <div className="flex items-center gap-4">
          <button className={`p-2 transition-colors ${isScrolled ? 'text-zinc-600 hover:text-zinc-900' : 'text-white/80 hover:text-white'}`}>
            <Search className="w-5 h-5" />
          </button>
          <button className={`p-2 transition-colors relative ${isScrolled ? 'text-zinc-600 hover:text-zinc-900' : 'text-white/80 hover:text-white'}`}>
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
          </button>
          <button className={`md:hidden p-2 ${isScrolled ? 'text-zinc-900' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4 text-zinc-600 font-medium">
              <a href="#" className="hover:text-amber-600">Inicio</a>
              <a href="#" className="hover:text-amber-600">Productos</a>
              <a href="#" className="hover:text-amber-600">Proyectos</a>
              <a href="#" className="hover:text-amber-600">Contacto</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              Buenos Aires • Calidad Premium
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
              CONSTRUYE <br />
              <span className="text-amber-500">TU VISIÓN</span>
            </h1>
            <p className="text-zinc-200 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
              Materiales de construcción de alta gama para proyectos que definen el horizonte. Entregas rápidas y asesoramiento experto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="¿Qué estás buscando hoy?" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-400 focus:outline-none focus:border-amber-500/50 transition-all backdrop-blur-md"
                />
              </div>
              <button className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-amber-500/20">
                Solicita presupuesto para tu proyecto
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                  <Truck className="text-amber-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">Envío Express</p>
                  <p className="text-zinc-300 text-xs">En todo CABA y GBA</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                  <ShieldCheck className="text-amber-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">Garantía Total</p>
                  <p className="text-zinc-300 text-xs">Materiales certificados</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Explorar</span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const Categories = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-2">Categorías</h2>
            <h3 className="text-4xl font-bold text-zinc-900 tracking-tight">Todo para tu <span className="text-amber-600 italic">obra</span></h3>
          </div>
          <button className="text-amber-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
            Ver catálogo completo <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center mb-4 transform -rotate-6 group-hover:rotate-0 transition-transform shadow-lg">
                  <cat.icon className="text-white w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{cat.name}</h4>
                <p className="text-zinc-200 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Explorar productos</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-20 border-y border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="text-center">
          <p className="text-5xl font-bold text-zinc-900 mb-2 tracking-tighter">25+</p>
          <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold">Años de Trayectoria</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-amber-600 mb-2 tracking-tighter">15k</p>
          <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold">Clientes Satisfechos</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-zinc-900 mb-2 tracking-tighter">500+</p>
          <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold">Obras Abastecidas</p>
        </div>
        <div className="text-center">
          <p className="text-5xl font-bold text-amber-600 mb-2 tracking-tighter">24h</p>
          <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold">Entrega Promedio</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
                <HardHat className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-zinc-900">CORRALÓN<span className="text-amber-500">ELITE</span></span>
            </div>
            <p className="text-zinc-600 max-w-sm mb-8">
              Líderes en la provisión de materiales para la construcción civil y arquitectónica en Buenos Aires. Calidad que perdura.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-amber-500 hover:text-white transition-all">
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div>
            <h5 className="text-zinc-900 font-bold mb-6">Empresa</h5>
            <ul className="space-y-4 text-zinc-600 text-sm">
              <li><a href="#" className="hover:text-amber-600 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Nuestras Sucursales</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Trabajá con Nosotros</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Blog de Obra</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-zinc-900 font-bold mb-6">Soporte</h5>
            <ul className="space-y-4 text-zinc-600 text-sm">
              <li><a href="#" className="hover:text-amber-600 transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Políticas de Envío</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Contacto Directo</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">© 2024 Corralón Elite Buenos Aires. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-zinc-500 text-xs">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-amber-500 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Categories />
        
        {/* Call to Action Section */}
        <section className="py-24 relative overflow-hidden bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="bg-white rounded-[2rem] p-12 md:p-20 border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-zinc-200/50">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">¿Listo para comenzar tu próximo <span className="text-amber-600">gran proyecto</span>?</h2>
                <p className="text-zinc-600 text-lg">Nuestro equipo de expertos está listo para asesorarte en cada etapa de tu obra. Cotizamos materiales a medida.</p>
              </div>
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-amber-500/20 text-lg">
                  Hablar con un Asesor
                </button>
                <p className="text-zinc-500 text-center text-sm">Respuesta en menos de 15 minutos</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
