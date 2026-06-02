import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  Shield,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  SlidersHorizontal,
  Menu,
  X,
  Maximize2,
  Send,
  Eye,
  Clock,
  Heart,
  Sparkles,
  Gem,
  Hammer,
  Palette,
  Check,
  User,
  Info,
  ExternalLink,
  MessageSquare,
  Badge,
  ThumbsUp,
  FileText,
  AlertCircle,
  Award,
  ChevronDown,
  Trash2,
  RefreshCw
} from 'lucide-react';
import { services, galleryItems, testimonials, reasonsToChoose } from './data';
import { Service, GalleryItem, LeadMessage } from './types';

export default function App() {
  // Mobile menu states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Service category selector
  const [activeCategory, setActiveCategory] = useState<'all' | 'flooring' | 'carpentry' | 'drywall-paint' | 'general' | 'turf'>('all');
  
  // Gallery categorization filter
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'flooring' | 'decks' | 'drywall-paint' | 'carpentry' | 'turf'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  // Form states
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formService, setFormService] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStep, setSubmissionStep] = useState(0);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Leads state (local storage simulation)
  const [leads, setLeads] = useState<LeadMessage[]>([]);
  const [showLeadsDashboard, setShowLeadsDashboard] = useState(false);

  // Load leads from storage
  useEffect(() => {
    const savedLeads = localStorage.getItem('l4_construction_leads');
    if (savedLeads) {
      try {
        setLeads(JSON.parse(savedLeads));
      } catch (e) {
        console.error('Error parsing leads', e);
      }
    }
  }, []);

  // Handle contact submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone || !formEmail || !formService) {
      alert('Por favor complete todos los campos obligatorios (*)');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStep(1); // "Validando datos..."

    // Data package to send to the mail integration
    const submissionData = {
      Nombre: formName,
      Teléfono: formPhone,
      "Correo Electrónico": formEmail,
      "Servicio Solicitado": formService,
      "Descripción del Proyecto": formDesc || "Sin descripción adicional",
      "_subject": `Nuevo presupuesto solicitado: ${formService} - ${formName}`,
      "_honey": "", // honeypot spam protection
      "_cc": "l4construction79@gmail.com"
    };

    // Step animation for supreme realism
    setTimeout(() => {
      setSubmissionStep(2); // "Calculando cobertura local en Nueva York y New Jersey..."
      
      setTimeout(() => {
        setSubmissionStep(3); // "Guardando solicitud de presupuesto..."
        
        setTimeout(async () => {
          const newLead: LeadMessage = {
            id: 'lead-' + Date.now(),
            name: formName,
            phone: formPhone,
            email: formEmail,
            service: formService,
            description: formDesc,
            date: new Date().toLocaleDateString('es-ES', {
              hour: '2-digit',
              minute: '2-digit',
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }),
            status: 'pending'
          };
          
          const updatedLeads = [newLead, ...leads];
          setLeads(updatedLeads);
          localStorage.setItem('l4_construction_leads', JSON.stringify(updatedLeads));

          // Try to dispatch actual email via FormSubmit API
          try {
            await fetch("https://formsubmit.co/ajax/l4construction79@gmail.com", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              body: JSON.stringify(submissionData)
            });
          } catch (error) {
            console.error("No se pudo enviar el correo de notificación, pero el lead fue guardado localmente:", error);
          }
          
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormName('');
          setFormPhone('');
          setFormEmail('');
          setFormService('');
          setFormDesc('');
          
        }, 1200);
      }, 1000);
    }, 800);
  };

  // Delete lead (for demonstration management purposes)
  const handleDeleteLead = (id: string) => {
    const updated = leads.filter(l => l.id !== id);
    setLeads(updated);
    localStorage.setItem('luis_pereira_leads', JSON.stringify(updated));
  };

  // Quick select a service from details card
  const selectServiceForQuote = (serviceName: string) => {
    setFormService(serviceName);
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to section helper
  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered lists
  const filteredServices = services.filter(s => activeCategory === 'all' || s.category === activeCategory);
  const filteredGallery = galleryItems.filter(g => galleryFilter === 'all' || g.category === galleryFilter);

  // Group services list of L4 for quick reference in search SEO index
  const seoPhrases = [
    'Instalación de pisos en Nueva York',
    'Contratista de pisos de madera Brooklyn',
    'Presupuesto de drywall Queens',
    'Instalador de decks en Long Island',
    'Pintor interior y exterior Bronx',
    'Remodelación de viviendas Staten Island',
    'Pulido de pisos Manhattan',
    'Instalación de cerámicos y césped artificial'
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-gray-900 font-sans antialiased text-left selection:bg-blue-600 selection:text-white pb-12">
      
      {/* LOCAL SEO METADATA & SCHEMA (MICRODATA JSON-LD FOR RICH SEARCH RESULT SIMULATION) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "L4 Construction & General Services - Pisos y Acabados de Construcción",
          "image": "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=1200",
          "telephone": "(408) 489-8012",
          "email": "l4construction79@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nueva York y New Jersey",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.7128",
            "longitude": "-74.0060"
          },
          "priceRange": "$$",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "07:00",
            "closes": "19:00"
          },
          "knowsAbout": seoPhrases
        })}
      </script>

      {/* TOP DECOR LEVEL BAR */}
      <div className="bg-blue-900 text-blue-100 py-2.5 px-4 text-xs font-medium border-b border-blue-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-6 text-center sm:text-left">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-300" />
              Cobertura Nueva York y New Jersey
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-300" />
              Lunes a Viernes: 7:00 AM - 7:00 PM
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="hidden sm:inline text-blue-200 text-[11px] font-bold">Respuesta en menos de 24hs</span>
            <a 
              href="https://wa.me/14084898012" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-1.5 rounded-xl font-extrabold flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp (Respuesta &lt; 24hs)
            </a>
          </div>
        </div>
      </div>

      {/* FLOAT CALL & WHATSAPP ACTION BUTTONS ON MOBILE */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <a
          href="https://wa.me/14084898012"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-emerald-600 text-white rounded-full shadow-2xl hover:bg-emerald-500 transition-all active:scale-95 border-2 border-white"
          aria-label="Contactar por WhatsApp a L4 Construction"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>

      {/* MAIN CONTAINER TO UNIFY BENTO DESIGN STRUCTURE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 flex flex-col gap-6">

        {/* SECTION 1: HERO & METRICS - BENTO GRID ROW */}
        <motion.header 
          id="inicio" 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 gap-6 items-stretch"
        >
          
          {/* Main Hero Cell (Col Span 12) - Clean, warm wood and light slate styled bento background with dynamic timber interior overlay */}
          <div className="col-span-12 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center shadow-xl min-h-[460px] border border-amber-200/70 bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20">
            
            {/* Dynamic transparent background image overlay (wood panels and floor finish) */}
            <div 
              className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200')`,
                backgroundSize: 'cover',
                backgroundPosition: 'right center'
              }}
            ></div>

            {/* Gradient shadow/wash overlay ensuring absolute readability of dark text on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-amber-50/90 to-transparent pointer-events-none"></div>

            {/* Ambient background warm light accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-200/10 opacity-50 transform skew-x-12 translate-x-10 pointer-events-none"></div>
            
            {/* Elegant watermark logo in the background centered and occupying the full area */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] sm:opacity-[0.11] pointer-events-none select-none overflow-hidden p-4 sm:p-8">
              <img 
                src="https://lh3.googleusercontent.com/d/1qNvF-R1sGVKgX7cPssjkZ9JFb9DbvulI" 
                alt="Background Watermark Logo" 
                referrerPolicy="no-referrer"
                className="w-full h-full max-w-[95%] max-h-[95%] object-contain"
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto w-full">
              
              {/* Texto principal (col-span-12) - Centered layout with background watermark */}
              <div className="lg:col-span-12 space-y-6 text-center flex flex-col items-center justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-black uppercase tracking-wider mx-auto shadow-sm">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Remodelaciones en NY y NJ
                </div>
                
                <h2 className="text-3xl sm:text-4.5xl md:text-5xl lg:text-5.5xl font-black leading-none tracking-tight text-[#3b2314] text-center max-w-4xl">
                  Transformamos sus espacios con <span className="text-amber-800 block sm:inline italic">acabados profesionales</span>
                </h2>
                
                <p className="text-base sm:text-lg text-slate-700 font-bold max-w-3xl leading-relaxed mx-auto text-center">
                  Especialistas en la instalación de pisos de madera y vinilo, drywall, carpintería fina, pintura residential, decks de exterior y césped artificial. Garantizamos acabados milimétricos de alta gama.
                </p>

                {/* Trust Metric Highlight list - Premium translucent light glass effect */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 w-full max-w-3xl mx-auto">
                  <div className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/75 shadow-sm text-center group hover:border-amber-600/50 transition-colors">
                    <p className="text-2xl font-black text-[#5c3c1e]">20+</p>
                    <p className="text-[10px] uppercase font-black text-[#855c34]">Años Experiencia</p>
                  </div>
                  <div className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/75 shadow-sm text-center group hover:border-amber-600/50 transition-colors">
                    <p className="text-2xl font-black text-[#5c3c1e]">100%</p>
                    <p className="text-[10px] uppercase font-black text-[#855c34]">Garantizado</p>
                  </div>
                  <div className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/75 shadow-sm text-center group hover:border-amber-600/50 transition-colors">
                    <p className="text-2xl font-black text-[#5c3c1e]">Gratis</p>
                    <p className="text-[10px] uppercase font-black text-[#855c34]">Presupuestos</p>
                  </div>
                  <div className="p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/75 shadow-sm text-center group hover:border-amber-600/50 transition-colors">
                    <p className="text-2xl font-black text-[#5c3c1e]">NY & NJ</p>
                    <p className="text-[10px] uppercase font-black text-[#855c34]">Cobertura Local</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4 w-full">
                  <button
                    onClick={() => scrollTo('contacto')}
                    className="bg-amber-700 text-white hover:bg-amber-600 px-8 py-3.5 rounded-2xl font-black text-sm shadow-lg shadow-amber-950/20 flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer"
                  >
                    Empezar Proyecto
                    <ArrowRight className="w-4 h-4 text-white animate-pulse" />
                  </button>
                  
                  <div className="flex items-center gap-3 justify-center max-w-sm">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-400 border border-white object-cover overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=150" alt="cliente" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-indigo-400 border border-white object-cover overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="cliente" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-emerald-500 border border-white flex items-center justify-center text-[10px] font-bold text-white">
                        ★
                      </div>
                    </div>
                    <p className="text-xs font-bold text-slate-700">+150 Propietarios Satisfechos en NY y NJ</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

        </motion.header>

        {/* EMERGENCY / EXPRESS QUOTE BENTO BAR - Wood styled warm amber colored bento strip */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-gradient-to-r from-amber-50 via-orange-50/70 to-amber-50 rounded-[2rem] border border-amber-200 p-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm text-center md:text-left"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="p-3.5 bg-amber-600/10 text-amber-800 rounded-2xl border border-amber-200/50">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-amber-950 leading-tight">¿Necesita un presupuesto express para su reforma hoy?</h3>
              <p className="text-xs text-amber-800/80 font-semibold">Evaluación rápida y detallada en menos de 24 horas con acabados de madera y remodelación.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => selectServiceForQuote('Instalación de pisos de madera')}
              className="px-4 py-2 text-xs font-black text-amber-950 bg-amber-100 hover:bg-amber-200/90 rounded-full transition-all border border-amber-200/85 shadow-sm cursor-pointer"
            >
              Consultar Pisos
            </button>
            <button
              onClick={() => selectServiceForQuote('Drywall & Enlucido')}
              className="px-4 py-2 text-xs font-black text-amber-950 bg-amber-100 hover:bg-amber-200/90 rounded-full transition-all border border-amber-200/85 shadow-sm cursor-pointer"
            >
              Consultar Drywall
            </button>
            <button
              onClick={() => selectServiceForQuote('Tarimas Exteriores (Decks)')}
              className="px-4 py-2 text-xs font-black text-amber-950 bg-amber-100 hover:bg-amber-200/90 rounded-full transition-all border border-amber-200/85 shadow-sm cursor-pointer"
            >
              Consultar Decks
            </button>
          </div>
        </motion.section>

        {/* SECTION 2: SOBRE NOSOTROS - BENTO GRID ROW */}
        <motion.section 
          id="nosotros" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-125px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          
          {/* Left Block: Image of L4 Construction at site (Col Span 5) - Beautiful Light Blue background decoration */}
          <div className="col-span-12 lg:col-span-5 bg-sky-50 rounded-[2.5rem] p-6 shadow-md border border-sky-150/80 flex flex-col justify-between relative overflow-hidden group/leftcard">
            
            {/* Elegant watermark logo in the background */}
            <div className="absolute right-[-10%] top-[40%] w-64 h-64 opacity-[0.07] pointer-events-none select-none overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/d/1qNvF-R1sGVKgX7cPssjkZ9JFb9DbvulI" 
                alt="Watermark background" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-4 relative z-10">
              <span className="text-[10px] uppercase font-black tracking-widest text-blue-900 bg-sky-200/60 px-3 py-1 rounded-md inline-block">
                Contratista Profesional
              </span>
              <h3 className="text-2xl font-black text-blue-900 leading-none">Compromiso Millonario en los Detalles</h3>
              <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                Cada corte de madera, cada capa de lijado y cada rincón de pintura requiere precisión milimétrica. L4 Construction & General Services no larpéa con soluciones genéricas: provee soporte constructor integral.
              </p>
            </div>

            {/* Showcase Image representing structural work - enhanced to stand out much more with deeper double-shadows and beautiful high-contrast amber boundaries */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 border-2 border-white ring-4 ring-amber-500/15 my-5 h-[200px] sm:h-auto group shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(217,119,6,0.25)] transition-all duration-300 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
                alt="Trabajo de nivelacion de pisos"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Logo de la empresa en la parte superior izquierda de la imagen */}
              <div className="absolute top-3 left-3 bg-white p-0.5 rounded-xl border border-amber-200/50 shadow-lg flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/d/1qNvF-R1sGVKgX7cPssjkZ9JFb9DbvulI" 
                  alt="L4 Construction Logo overlay" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-3 right-3 bg-blue-900/90 backdrop-blur-md text-white text-[9px] sm:text-[10px] px-2.5 py-1 rounded-lg font-black uppercase tracking-widest shadow-sm">
                En obra real
              </div>
            </div>

            {/* Quick check details */}
            <div className="space-y-2 text-xs font-bold text-gray-700">
              <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Instalación de pisos autorizada y garantizada por escrito</p>
              <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Cobertura total de seguridad en el inmueble</p>
            </div>
          </div>

          {/* Right Block: Content & Highlights (Col Span 7) - Elegant matching Light Blue and White radial gradient */}
          <div className="col-span-12 lg:col-span-7 bg-gradient-to-br from-white via-sky-50/50 to-sky-100/20 rounded-[2.5rem] p-6 sm:p-8 lg:p-10 border border-sky-150/70 shadow-md flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase font-black text-sky-500 tracking-widest">¿Quiénes somos?</h4>
              <h2 className="text-3xl sm:text-4xl font-black text-blue-950 leading-none">
                Su socio local para acabados impecables en Nueva York y New Jersey
              </h2>
              <p className="text-sm sm:text-base text-gray-750 font-semibold leading-relaxed">
                Somos una empresa apasionada por las labores de instalación de pisos, carpintería, pintura y remodelación residencial. Nuestra reputación se ha construido base por base: cumpliendo plazos con rigor, manteniendo los espacios pulcros y aplicando materiales líderes en el mercado de Nueva York y New Jersey.
              </p>
            </div>

            {/* Bento Grid Sub-items with subtle light blue card styling */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/80 rounded-2xl p-5 border border-sky-100 flex items-start gap-4 hover:border-blue-300 transition-all shadow-sm">
                <div className="w-10 h-10 bg-sky-100 text-blue-900 flex items-center justify-center rounded-xl flex-shrink-0 border border-sky-200">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-blue-950">Calidad Suprema</h4>
                  <p className="text-xs text-slate-600 font-bold mt-0.5">Procedimientos certificados y materiales de catálogo premium.</p>
                </div>
              </div>

              <div className="bg-white/80 rounded-2xl p-5 border border-sky-100 flex items-start gap-4 hover:border-blue-300 transition-all shadow-sm">
                <div className="w-10 h-10 bg-sky-100 text-blue-900 flex items-center justify-center rounded-xl flex-shrink-0 border border-sky-200">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-blue-950">Atención al Detalle</h4>
                  <p className="text-xs text-slate-600 font-bold mt-0.5">Cortes ingleados perfectos, nivelaciones láser e instalación limpia.</p>
                </div>
              </div>

              <div className="bg-white/80 rounded-2xl p-5 border border-sky-100 flex items-start gap-4 hover:border-blue-300 transition-all shadow-sm">
                <div className="w-10 h-10 bg-sky-100 text-blue-900 flex items-center justify-center rounded-xl flex-shrink-0 border border-sky-200">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-blue-950">Limpieza Meticulosa</h4>
                  <p className="text-xs text-slate-600 font-bold mt-0.5">Orden diario riguroso. Nos vamos dejando todo limpio.</p>
                </div>
              </div>

              <div className="bg-white/80 rounded-2xl p-5 border border-sky-100 flex items-start gap-4 hover:border-blue-300 transition-all shadow-sm">
                <div className="w-10 h-10 bg-sky-100 text-blue-900 flex items-center justify-center rounded-xl flex-shrink-0 border border-sky-200">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-blue-950">Puntualidad Absoluta</h4>
                  <p className="text-xs text-slate-600 font-bold mt-0.5">Respeto milimétrico de las agendas pactadas y fechas límite.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-sky-150 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="https://wa.me/14084898012"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold p-3.5 rounded-xl text-center text-xs flex items-center justify-center gap-1.5 shadow transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp (Respuesta en menos de 24hs)
              </a>
              <button
                onClick={() => scrollTo('contacto')}
                className="border border-sky-300 hover:bg-sky-50 text-blue-950 font-black p-3.5 rounded-xl text-xs text-center transition-all cursor-pointer"
              >
                Solicitar una Visita Técnica
              </button>
            </div>
          </div>
        </motion.section>

        {/* SECTION 3: SERVICES EXPLORER & CATEGORIES - FULL SPA TAB CONTROLLER (Wood Theme / Color de la Madera) */}
        <motion.section 
          id="servicios" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 relative overflow-hidden bg-gradient-to-br from-[#fbf8f4] via-[#f7ebe0]/40 to-[#fcfcf9] p-6 sm:p-10 lg:p-12 rounded-[2.5rem] border border-amber-200/80 shadow-lg"
        >
          {/* Subtle real wood grain photo overlay at extremely low opacity */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>

          <div className="text-center space-y-3 max-w-2xl mx-auto my-4 relative z-10">
            <span className="text-[10px] uppercase font-black tracking-widest text-[#6c4722] bg-amber-100 border border-amber-200/50 px-3.5 py-1 rounded-full">
              Catálogo de Especialidades
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-amber-950 leading-none">
              Nuestros Servicios Profesionales Obra por Obra
            </h2>
            <p className="text-xs sm:text-sm text-amber-805 text-amber-900/80 leading-relaxed font-bold">
              Ofrecemos tranquilidad integral en cada remodelación. Use las pestañas para explorar especialidades residenciales con estimaciones claras y acabados de madera y construcción de alta calidad.
            </p>
          </div>

          {/* Service Categories Selector Tabs - Custom Amber/Wood styled */}
          <div className="flex flex-wrap justify-center gap-1.5 bg-white/70 backdrop-blur p-2 rounded-[2rem] border border-amber-200/50 shadow-sm max-w-5xl mx-auto relative z-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer ${activeCategory === 'all' ? 'bg-amber-900 text-white shadow-lg' : 'text-amber-800 hover:bg-amber-50 hover:text-amber-950'}`}
            >
              Todos los Servicios ({services.length})
            </button>
            <button
              onClick={() => setActiveCategory('flooring')}
              className={`px-4 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer ${activeCategory === 'flooring' ? 'bg-amber-900 text-white shadow-lg' : 'text-amber-800 hover:bg-amber-50 hover:text-amber-950'}`}
            >
              Pisos & Revestimientos
            </button>
            <button
              onClick={() => setActiveCategory('carpentry')}
              className={`px-4 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer ${activeCategory === 'carpentry' ? 'bg-amber-900 text-white shadow-lg' : 'text-amber-800 hover:bg-amber-50 hover:text-amber-950'}`}
            >
              Carpintería/Decks
            </button>
            <button
              onClick={() => setActiveCategory('drywall-paint')}
              className={`px-4 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer ${activeCategory === 'drywall-paint' ? 'bg-amber-900 text-white shadow-lg' : 'text-amber-800 hover:bg-amber-50 hover:text-amber-950'}`}
            >
              Drywall & Pintura
            </button>
            <button
              onClick={() => setActiveCategory('general')}
              className={`px-4 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer ${activeCategory === 'general' ? 'bg-amber-900 text-white shadow-lg' : 'text-amber-800 hover:bg-amber-50 hover:text-amber-950'}`}
            >
              Cerámicos/Albañilería
            </button>
            <button
              onClick={() => setActiveCategory('turf')}
              className={`px-4 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer ${activeCategory === 'turf' ? 'bg-amber-900 text-white shadow-lg' : 'text-amber-800 hover:bg-amber-50 hover:text-amber-950'}`}
            >
              Césped sintético
            </button>
          </div>

          {/* Services Grid with Custom Wood/Amber Accents */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => {
                // Custom map icon to each category
                let ServiceIcon = Hammer;
                let iconBg = 'bg-amber-50 text-amber-900 border border-amber-100';
                if (service.category === 'flooring') {
                  ServiceIcon = SlidersHorizontal;
                  iconBg = 'bg-[#f7ebe0] text-amber-950 border border-amber-200';
                } else if (service.category === 'drywall-paint') {
                  ServiceIcon = Palette;
                  iconBg = 'bg-teal-50 text-teal-900 border border-teal-100';
                } else if (service.category === 'turf') {
                  ServiceIcon = Heart;
                  iconBg = 'bg-emerald-50 text-emerald-900 border border-emerald-100';
                }

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={service.id}
                    className="bg-white border border-amber-100 rounded-3xl p-6 hover:border-amber-800 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm text-left"
                  >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="p-0.5 bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-xl group-hover:scale-110 transition-transform flex items-center justify-center overflow-hidden border border-amber-200/50 shadow-sm">
                        <img 
                          src="https://lh3.googleusercontent.com/d/1qNvF-R1sGVKgX7cPssjkZ9JFb9DbvulI" 
                          alt={service.name} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      <span className="text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded bg-amber-50 text-amber-900 border border-amber-100/50">
                        {service.category === 'flooring' ? 'Pisos' : service.category === 'carpentry' ? 'Carpintería' : service.category === 'drywall-paint' ? 'Pintura' : service.category === 'turf' ? 'Césped' : 'General'}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-[#5c3c1e] group-hover:text-amber-900 transition-colors">
                      {service.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#7e6046] leading-relaxed font-semibold">
                      {service.description}
                    </p>

                    <div className="pt-2">
                      <p className="text-[10px] font-black uppercase tracking-wider text-amber-800/60 mb-2">Entregamos:</p>
                      <ul className="space-y-1.5">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-amber-950 font-bold">
                            <Check className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-amber-50 flex items-center justify-between">
                    <button
                      onClick={() => selectServiceForQuote(service.name)}
                      className="text-xs font-black text-amber-900 hover:text-[#5c3c1e] transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      Solicitar Presupuesto
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <span className="text-amber-800/50 text-[10px] font-mono font-bold">100% Madera & Obra</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Quick Help Bento Badge */}
          <div className="bg-white/85 backdrop-blur-md border border-amber-200 rounded-[2rem] p-6 max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm relative z-10">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-base sm:text-lg font-extrabold text-amber-950">¿Tiene un proyecto especial que no ve listado?</h4>
              <p className="text-xs text-amber-900/70 font-semibold">L4 Construction & General Services cuenta con licencias y destrezas para múltiples reparaciones residenciales adicionales en Nueva York y New Jersey.</p>
            </div>
            <button
              onClick={() => selectServiceForQuote('Otras Obras')}
              className="px-6 py-2.5 rounded-full bg-amber-900 hover:bg-amber-800 text-white text-xs font-black tracking-wide transition-all whitespace-nowrap shadow-md cursor-pointer"
            >
              Consultar con L4
            </button>
          </div>
        </motion.section>

        {/* SECTION 5: GALERÍA DE PROYECTOS - Beautiful Dark Blue Theme with luxury wood grain background */}
        <motion.section 
          id="galeria" 
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 relative overflow-hidden bg-gradient-to-br from-[#060c18] via-[#0c1a36] to-[#040a15] p-6 sm:p-10 lg:p-12 rounded-[2.5rem] border border-blue-950 shadow-2xl"
        >
          {/* Subtle design overlay with real wood interior backdrop */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1448630360428-6522c1536394?auto=format&fit=crop&q=80&w=1200')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>

          <div className="text-center space-y-3 max-w-2xl mx-auto my-6 relative z-10">
            <span className="text-[10px] uppercase font-black tracking-widest text-[#06b6d4] bg-[#0c1a36] border border-cyan-800/40 px-3.5 py-1 rounded-full">
              Galería Fotográfica
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-none">
              Imágenes de Proyectos Recientes
            </h2>
            <p className="text-xs sm:text-sm text-sky-200/80 leading-relaxed font-semibold">
              Explore una recopilación cuidada de fotografías de nuestros acabados en pisos de madera, laminados, vinilos, césped artificial, decks y pintura en Nueva York y New Jersey. Click en la imagen para ampliar.
            </p>
          </div>

          {/* Project Filters tab menu */}
          <div className="flex flex-wrap justify-center gap-1 bg-[#0c1a36]/60 backdrop-blur p-2 rounded-[2rem] border border-blue-900/40 shadow-inner max-w-4xl mx-auto relative z-10">
            <button
              onClick={() => setGalleryFilter('all')}
              className={`px-3.5 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${galleryFilter === 'all' ? 'bg-sky-500 text-slate-950 shadow-sm' : 'text-sky-200/80 hover:bg-blue-900/40 hover:text-white'}`}
            >
              Todos
            </button>
            <button
              onClick={() => setGalleryFilter('flooring')}
              className={`px-3.5 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${galleryFilter === 'flooring' ? 'bg-sky-500 text-slate-950 shadow-sm' : 'text-sky-200/80 hover:bg-blue-900/40 hover:text-white'}`}
            >
              Pisos en Madera/Laminados/Vinilos
            </button>
            <button
              onClick={() => setGalleryFilter('decks')}
              className={`px-3.5 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${galleryFilter === 'decks' ? 'bg-sky-500 text-slate-950 shadow-sm' : 'text-sky-200/80 hover:bg-blue-900/40 hover:text-white'}`}
            >
              Decks Exteriores
            </button>
            <button
              onClick={() => setGalleryFilter('drywall-paint')}
              className={`px-3.5 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${galleryFilter === 'drywall-paint' ? 'bg-sky-500 text-slate-950 shadow-sm' : 'text-sky-200/80 hover:bg-blue-900/40 hover:text-white'}`}
            >
              Drywall & Facies
            </button>
            <button
              onClick={() => setGalleryFilter('turf')}
              className={`px-3.5 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${galleryFilter === 'turf' ? 'bg-sky-500 text-slate-950 shadow-sm' : 'text-sky-200/80 hover:bg-blue-900/40 hover:text-white'}`}
            >
              Césped sintético
            </button>
          </div>

          {/* Pictures bento list */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => {
                    setLightboxItem(item);
                    setActiveImageIdx(0);
                  }}
                  className="bg-[#0b1426]/85 p-3 rounded-3xl border border-blue-900/30 hover:border-sky-500 hover:shadow-2xl transition-all duration-300 shadow-md group cursor-pointer aspect-square relative overflow-hidden"
                >
                <div className="rounded-2xl overflow-hidden w-full h-full relative bg-slate-950">
                  <img src={item.imgUrl} alt={item.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-75 transition-all duration-500" />
                  
                  {/* Click/Zoom overlay */}
                  <div className="absolute inset-0 bg-[#070e1c]/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-sky-500 text-slate-950 flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-4 h-4 text-slate-950" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#02050c] to-transparent text-white text-left">
                    <span className="text-[9px] font-black uppercase text-sky-400 tracking-wider block mb-0.5">
                      {item.category === 'flooring' ? 'Pisos' : item.category === 'decks' ? 'Tarimas' : item.category === 'drywall-paint' ? 'Pintura' : item.category === 'turf' ? 'Césped Sintético' : 'Framing'}
                    </span>
                    <h4 className="text-xs font-black leading-tight truncate">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>

          <div className="text-center pt-4 relative z-10">
            <p className="text-xs text-sky-200/60 font-semibold mb-2">Pídanos fotos de referencias de obras adicionales realizadas en su barrio habitual en Nueva York y New Jersey</p>
            <button
              onClick={() => scrollTo('contacto')}
              className="inline-flex items-center gap-1.5 text-sky-300 hover:text-sky-200 text-xs font-black cursor-pointer"
            >
              Consultar Fotos de Referencias Directas
              <ArrowRight className="w-4 h-4 text-sky-300" />
            </button>
          </div>
        </motion.section>

        {/* LIGHTBOX POPUP MODAL (Preserved features) */}
        {lightboxItem && (
          <div 
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm overflow-y-auto flex items-start md:items-center justify-center p-4 transition-all"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative my-auto max-w-4xl w-full bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-12 text-left"
            >
              
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Cerrar ventana"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="md:col-span-8 flex items-center justify-center bg-black aspect-[4/3] md:aspect-auto relative min-h-[40vh] md:min-h-[500px]">
                <img
                  src={lightboxItem.images && lightboxItem.images.length > 0 ? lightboxItem.images[activeImageIdx] : lightboxItem.imgUrl}
                  alt={lightboxItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[75vh]"
                />

                {lightboxItem.images && lightboxItem.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIdx((prev) => (prev > 0 ? prev - 1 : lightboxItem.images!.length - 1));
                      }}
                      className="absolute left-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/85 transition-all border border-white/20 shadow-md"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIdx((prev) => (prev < lightboxItem.images!.length - 1 ? prev + 1 : 0));
                      }}
                      className="absolute right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/85 transition-all border border-white/20 shadow-md"
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    {/* Horizontal preview thumbnails */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 bg-black/60 backdrop-blur-sm p-1.5 rounded-2xl border border-white/10 max-w-[90%] overflow-x-auto scrollbar-none">
                      {lightboxItem.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIdx(i);
                          }}
                          className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                            i === activeImageIdx ? 'border-blue-500 scale-105 shadow-md' : 'border-white/20 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt={`Vista ${i + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase text-blue-900 bg-blue-50 px-2 py-1 rounded">
                    PROYECTO REALIZADO (NY & NJ)
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-extrabold text-blue-900 leading-tight">{lightboxItem.title}</h3>
                  
                  {lightboxItem.description ? (
                    <p className="text-xs font-medium text-gray-600 leading-relaxed">
                      {lightboxItem.description}
                    </p>
                  ) : (
                    <p className="text-xs font-medium text-gray-600 leading-relaxed">
                      Ejecución finalizada con garantía escrita por L4 Construction & General Services. Este proyecto cumple rigurosamente con los estándares estéticos y constructivos de Nueva York y New Jersey.
                    </p>
                  )}

                  <div className="space-y-2 mt-4 text-[11px] font-bold text-gray-700">
                    {lightboxItem.bulletPoints ? (
                      lightboxItem.bulletPoints.map((bp, idx) => (
                        <p key={idx} className="flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> {bp}
                        </p>
                      ))
                    ) : (
                      <>
                        <p className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Nivelación precisa del contrapiso</p>
                        <p className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Ausencia de crujidos en madera</p>
                        <p className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" /> Limpieza diaria y entrega impecable</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-2 border-t border-gray-150 pt-4 mt-4">
                  <button
                    onClick={() => {
                      selectServiceForQuote(lightboxItem.title);
                      setLightboxItem(null);
                    }}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white p-3 rounded-xl text-xs font-black shadow transition-all"
                  >
                    Cotizar este acabado
                  </button>
                  <button
                    onClick={() => setLightboxItem(null)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 p-2.5 rounded-xl text-xs font-bold transition-all"
                  >
                    Volver a la Galería
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SECTION 6: VALUE PROPOSITIONS BENTO CARDS (Light Blue Theme / Azul Claro) */}
        <motion.section 
          id="elegirnos" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 bg-gradient-to-br from-white via-sky-50/40 to-sky-100/10 p-6 sm:p-10 rounded-[2.5rem] border border-sky-150/80 shadow-md"
        >
          <div className="text-center space-y-3 max-w-2xl mx-auto my-4">
            <span className="text-[10px] uppercase font-black tracking-widest text-blue-900 bg-sky-200/50 px-3.5 py-1 rounded-full">
              ¿Por qué L4 Construction?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-950 leading-none">
              Tranquilidad de Principio a Fin
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-bold">
              Elegir un contratista local debe basarse en la confianza y el rigor técnico. Aportamos sólidas garantías para su mayor tranquilidad en Queens, Brooklyn y toda el área metropolitana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasonsToChoose.map((reason, index) => {
              let RIcon = Shield;
              if (reason.iconName === 'ShieldCheck') RIcon = CheckCircle;
              else if (reason.iconName === 'UserCheck') RIcon = User;
              else if (reason.iconName === 'Sparkles') RIcon = Sparkles;
              else if (reason.iconName === 'FlameKindling') RIcon = RefreshCw;
              else if (reason.iconName === 'Gem') RIcon = Gem;
              else if (reason.iconName === 'FileText') RIcon = FileText;
              else if (reason.iconName === 'Clock') RIcon = Clock;
              else if (reason.iconName === 'Heart') RIcon = Heart;

              return (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur rounded-3xl p-6 border border-sky-100 hover:border-blue-700 shadow-md hover:shadow-lg transition-all text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-100/80 text-blue-950 flex items-center justify-center border border-sky-200/40">
                      <RIcon className="w-6 h-6 text-blue-900" />
                    </div>
                    
                    <h3 className="text-base font-extrabold text-blue-950 leading-tight">
                      {reason.title}
                    </h3>
                    
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-sky-100 text-[10px] font-bold text-slate-400 mt-4 uppercase tracking-wider flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600" />
                    Garantía L4 Construction
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* SECTION 7: TESTIMONIOS - COMPONENT ARRANGEMENT (Wood Theme / Color de la Madera) */}
        <motion.section 
          id="testimonios" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 relative overflow-hidden bg-gradient-to-br from-[#fbf8f4] via-[#f7ebe0]/30 to-[#fdfbf8] p-6 sm:p-10 rounded-[2.5rem] border border-amber-200/80 shadow-md"
        >
          {/* Subtle real wood grain overlay */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>

          <div className="text-center space-y-3 max-w-2xl mx-auto my-4 relative z-10">
            <span className="text-[10px] uppercase font-black tracking-widest text-[#6c4722] bg-amber-100 border border-amber-200/50 px-3.5 py-1 rounded-full">
              Opiniones de Clientes
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-amber-950 leading-none">
              Testimonios de Propietarios en NY y NJ
            </h2>
            <p className="text-xs sm:text-sm text-amber-900/80 leading-relaxed font-bold">
              Conozca la puntuación e impresiones que nos otorgan contratantes de la comunidad al ver aplicados los acabados finales de pintura, drywall y pavimentos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-[2rem] p-6 sm:p-8 border border-amber-200/50 shadow-sm flex flex-col justify-between relative hover:border-amber-700 hover:shadow-md transition-all h-full text-left"
              >
                <div className="absolute top-6 right-8 text-amber-200/40 font-serif text-5xl leading-none pointer-events-none select-none">
                  “
                </div>

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Quoted Text */}
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-bold italic">
                    "{test.text}"
                  </p>
                </div>

                {/* Profile Details */}
                <div className="pt-5 mt-5 border-t border-amber-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {test.avatarUrl && (
                      <img 
                        src={test.avatarUrl} 
                        alt={test.name} 
                        className="w-10 h-10 rounded-full object-cover border border-amber-200/40 shadow-sm shrink-0 animate-fade-in"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div>
                      <h4 className="text-xs font-black text-[#5c3c1e]">{test.name}</h4>
                      <p className="text-[10px] text-amber-800/80 font-semibold flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#5c3c1e]" />
                        {test.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[9px] font-black text-amber-905 bg-amber-50 border border-amber-100/50 text-amber-900 px-2 py-0.5 rounded block">
                      Verificado
                    </span>
                    <span className="text-[10px] font-mono text-amber-800/50 mt-1 block">{test.date}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Social metrics bar - Wood Styled */}
          <div className="bg-white/90 backdrop-blur-md border border-amber-200 rounded-3xl p-6 flex flex-wrap justify-center gap-x-12 gap-y-6 text-center shadow-sm max-w-5xl mx-auto relative z-10">
            <div className="space-y-1">
              <p className="text-3xl font-black text-amber-950 leading-none">100%</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-amber-800/60">Clientes Satisfechos</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-amber-950 leading-none">NY, NJ</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-amber-800/60">Región de Cobertura</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-amber-950 leading-none">Gratis</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-amber-800/60">Estimados & Visita</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-amber-950 leading-none">4.9/5</p>
              <p className="text-[10px] font-black uppercase tracking-wider text-amber-800/60">Puntaje de Opiniones</p>
            </div>
          </div>
        </motion.section>

        {/* SECTION 8: CONTACT FORM & FORMULARIO DE ACCESOS - SPLIT BENTO CARD */}
        <motion.section 
          id="contacto" 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          
          {/* Left Column: Local Contact Information (Col Span 5) */}
          <div className="col-span-12 lg:col-span-5 bg-blue-900 rounded-[2.5rem] p-6 sm:p-8 shadow-xl border border-blue-950 flex flex-col justify-between text-white gap-6">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-black tracking-widest text-blue-300 bg-blue-950 px-3 py-1 rounded inline-block">
                Contacto Directo
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none text-white">
                Solicite su presupuesto gratis hoy mismo
              </h2>
              <p className="text-blue-105 text-blue-100/90 text-xs sm:text-sm font-medium leading-relaxed">
                Planifique directamente con L4 Construction & General Services la remodelación de sus pisos, drywall, pintura o deck. No larpéamnos con presupuestos genéricos: evaluamos metrajes reales.
              </p>
            </div>

            {/* Micro details links */}
            <div className="space-y-4">
              
              <a href="https://wa.me/14084898012" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950 border border-emerald-800 hover:border-emerald-400 transition-all group block text-left">
                <div className="p-3 rounded-xl bg-emerald-900 text-white group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <p className="text-[10px] text-emerald-200 font-bold uppercase tracking-wider">Escríbanos por WhatsApp</p>
                  <p className="text-base sm:text-lg font-black text-white leading-tight">(408) 489-8012</p>
                  <p className="text-[11px] text-emerald-300 font-bold">Le responderemos en un plazo de hasta 24hs</p>
                </div>
              </a>

              <a href="mailto:l4construction79@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-blue-950 border border-blue-800 hover:border-white transition-all group block text-left">
                <div className="p-3 rounded-xl bg-blue-900 text-blue-300 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-blue-300" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] text-blue-200 font-bold uppercase tracking-wider">Correo Directo</p>
                  <p className="text-xs sm:text-sm font-black text-white truncate leading-tight">l4construction79@gmail.com</p>
                  <p className="text-[11px] text-blue-200 font-bold">Le responderemos en un plazo de hasta 24hs</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-950 border border-blue-800 text-left">
                <div className="p-3 rounded-xl bg-blue-900 text-blue-200">
                  <MapPin className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">Zona de Cobertura</p>
                  <p className="text-xs font-black text-white">Nueva York y New Jersey</p>
                  <p className="text-[10px] text-blue-200">Brooklyn, Queens, Bronx, Manhattan, Staten Island, Long Island y norte de New Jersey</p>
                </div>
              </div>

            </div>

            {/* Privacy note */}
            <div className="p-4 rounded-xl bg-blue-950 border border-blue-800/80 space-y-1.5 text-left">
              <h4 className="text-[10px] font-black uppercase text-blue-300 tracking-wider flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-blue-300" />
                Compromiso de Confidencialidad
              </h4>
              <p className="text-[10px] text-blue-105 text-blue-100/70 font-semibold leading-relaxed">
                Sus datos están seguros. Solo los utilizaremos para comunicarnos directamente y coordinar la cotización de los servicios de remodelación que asigne.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Submission Form (Col Span 7) */}
          <div className="col-span-12 lg:col-span-7 bg-white p-6 sm:p-10 rounded-[2.5rem] border-2 border-blue-900 text-gray-905 shadow-xl flex flex-col justify-between text-left">
            {submitSuccess ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-600 animate-bounce shadow">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-blue-900">¡Presupuesto Solicitado con Éxito!</h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-semibold max-w-md mx-auto">
                    La solicitud de cotización para <strong>{formService || 'Servicio General'}</strong> ha sido registrada en el sistema y enviada automáticamente por correo electrónico a: <br /><strong className="text-blue-900 font-bold">l4construction79@gmail.com</strong>
                  </p>
                  <p className="text-xs text-gray-400 font-medium">
                    L4 Construction se pondrá en contacto pronto por teléfono o mail para agendar una visita en terreno o dar seguimiento.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-250 max-w-md mx-auto text-left space-y-1.5 text-xs text-gray-600 font-medium">
                  <p className="font-extrabold text-blue-900 uppercase tracking-wider text-[10px]">Resumen Registrado Localmente:</p>
                  <p><span className="text-gray-400">Cliente:</span> {formName}</p>
                  <p><span className="text-gray-400">Cobertura:</span> NY & NJ Area</p>
                  <p><span className="text-gray-400">Estado:</span> <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 font-black uppercase text-[9px]">Listo para estimación</span></p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-5 py-2.5 rounded-full text-xs font-black bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors cursor-pointer"
                  >
                    Enviar Nueva Solicitud
                  </button>
                  <button
                    onClick={() => {
                      setShowLeadsDashboard(true);
                      setTimeout(() => {
                        const el = document.getElementById('leads-dashboard');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="px-5 py-2.5 rounded-full text-xs font-black bg-blue-900 hover:bg-blue-800 text-white transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-white" />
                    Ver bandeja de Leads
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-black text-blue-900">Envíe un mensaje directo a L4 Construction</h3>
                  <p className="text-xs text-gray-400 font-bold">Evaluación y respuesta sin coste de cotización inicial en Nueva York y New Jersey.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="name-input" className="text-[10px] font-black uppercase tracking-wider text-gray-500 block">
                      Su nombre completo *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                        <User className="w-4 h-4 text-gray-400" />
                      </span>
                      <input
                        id="name-input"
                        type="text"
                        required
                        placeholder="Ej: Juan Martínez"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-gray-50 transition-all font-semibold text-xs text-gray-900"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="phone-input" className="text-[10px] font-black uppercase tracking-wider text-gray-500 block">
                      Teléfono de contacto *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                        <Phone className="w-4 h-4 text-gray-400" />
                      </span>
                      <input
                        id="phone-input"
                        type="tel"
                        required
                        placeholder="Ej: (123) 456-7890"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-gray-50 transition-all font-semibold text-xs text-gray-900"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="email-input" className="text-[10px] font-black uppercase tracking-wider text-gray-500 block">
                      Correo electrónico *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                        <Mail className="w-4 h-4 text-gray-400" />
                      </span>
                      <input
                        id="email-input"
                        type="email"
                        required
                        placeholder="correo@ejemplo.com"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-gray-50 transition-all font-semibold text-xs text-gray-900"
                      />
                    </div>
                  </div>

                  {/* Requested Service options selector */}
                  <div className="space-y-1">
                    <label htmlFor="service-select" className="text-[10px] font-black uppercase tracking-wider text-gray-500 block">
                      Servicio requerido *
                    </label>
                    <div className="relative">
                      <select
                        id="service-select"
                        required
                        value={formService}
                        onChange={(e) => setFormService(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-gray-50 transition-all font-semibold text-xs text-gray-900 appearance-none cursor-pointer"
                      >
                        <option value="">-- Seleccione un Servicio --</option>
                        <option value="Instalación de pisos de madera">Instalación de pisos de madera</option>
                        <option value="Pisos laminados o vinilo">Pisos laminados o vinilo</option>
                        <option value="Pulido y barnizado de pisos">Pulido y barnizado de pisos</option>
                        <option value="Tarimas exteriores (Decks)">Tarimas exteriores (Decks)</option>
                        <option value="Drywall & Enlucido">Drywall / Sheetrock / Enlucido</option>
                        <option value="Pintura interior o exterior">Pintura interior / exterior</option>
                        <option value="Instalación de cerámicos">Instalación de cerámicos</option>
                        <option value="Césped artificial o Albañilería">Césped artificial / Albañilería</option>
                        <option value="Renovación / Remodelación General">Remodelación Residencial General</option>
                        <option value="Otras Obras">Otro requerimiento específico</option>
                      </select>
                      <span className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 pointer-events-none">
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description Box */}
                <div className="space-y-1">
                  <label htmlFor="desc-textarea" className="text-[10px] font-black uppercase tracking-wider text-gray-500 block">
                    Descripción del proyecto (Metraje aproximado, plazos sugeridos)
                  </label>
                  <textarea
                    id="desc-textarea"
                    rows={3}
                    placeholder="Ej: Quiero cambiar el suelo de la sala de estar a pisos de vinilo y pintar un dormitorio de 12x12 pies con drywall en Queens."
                    value={formDesc}
                    onChange={(e) => setFormDesc(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 text-xs text-gray-900 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 bg-gray-50 transition-all font-semibold"
                  />
                </div>

                {/* Submission Steps Loader Simulation */}
                {isSubmitting && (
                  <div className="bg-blue-50 p-3 rounded-2xl border border-blue-200 text-left space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 border-2 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-[11px] font-black text-blue-900">
                        {submissionStep === 1 ? 'Analizando estructura del proyecto...' :
                         submissionStep === 2 ? 'Verificando cobertura de cuadrilla local en NY & NJ...' :
                         'Guardando solicitud de presupuesto express...'}
                      </p>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-1 overflow-hidden">
                      <div
                        className="bg-blue-905 bg-blue-900 h-1 rounded-full transition-all duration-700"
                        style={{
                          width: submissionStep === 1 ? '30%' :
                                 submissionStep === 2 ? '70%' : '95%'
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Submission Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center p-3.5 rounded-xl text-xs font-black text-white bg-blue-900 hover:bg-blue-800 focus:outline-none active:scale-98 transition-all disabled:opacity-50 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 mr-2 text-white" />
                  Solicitar Presupuesto Gratis
                </button>

                <p className="text-center text-[10px] text-gray-400 font-bold">
                  ✓ Evaluado directamente por L4 Construction & General Services. Sin coste de cotización inicial en Nueva York y New Jersey.
                </p>
              </form>
            )}
          </div>
        </motion.section>

        {/* SECTION 9: LLAMADA A LA ACCIÓN FINAL - HORIZONTAL BENTO BANNER */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-blue-900 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col justify-center text-white shadow-xl max-w-5xl mx-auto text-center border border-blue-950"
        >
          {/* Slices of glowing background shapes */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800 opacity-20 transform skew-x-12 translate-x-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-800 opacity-15 transform -skew-x-12 -translate-x-10 pointer-events-none"></div>
          
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="text-[10px] uppercase font-black tracking-widest text-blue-300 bg-blue-950 px-3 py-1 rounded inline-block">
              Presupuestos Sin Compromiso
            </span>
            <h2 className="text-3xl sm:text-4.5xl md:text-5xl font-black text-white leading-tight">
              ¿Listo para renovar sus espacios?
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm font-semibold leading-relaxed">
              Coméntenos las dimensiones o el tipo de madera de su suelo, las paredes de drywall o pintura, y le prepararemos un estimado transparente del alcance completo.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center max-w-lg mx-auto">
              <a
                href="https://wa.me/14084898012"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-black text-white bg-emerald-600 hover:bg-emerald-500 shadow transition-all cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 mr-1.5 text-white" />
                Enviar WhatsApp (Respuesta &lt; 24hs)
              </a>
              <button
                onClick={() => scrollTo('contacto')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-black text-white bg-blue-950 border border-blue-800 hover:bg-blue-900 shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                Escribir un Mensaje
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>
        </motion.section>



        {/* SECTION 11: FOOTER BENTO DESPATCH */}
        <footer className="bg-white rounded-[2.5rem] border border-gray-200 p-6 sm:p-10 shadow-md text-left mt-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-gray-100">
            
            {/* Column 1: Presentación (Col Span 4) */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-0.5 bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center overflow-hidden border border-amber-200/50 shadow-sm shrink-0">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1qNvF-R1sGVKgX7cPssjkZ9JFb9DbvulI" 
                    alt="L4 Construction Logo" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-lg font-extrabold text-blue-900">L4 Construction & General Services</h4>
              </div>
              <p className="text-xs text-gray-500 font-bold leading-relaxed max-w-sm">
                Constructor y artesano especialista en instalación de maderas nobles, tarimas, revestimientos flotantes, pintura de fachadas y drywall en la comunidad de Nueva York y New Jersey. Con más de 20 años de reputación en la región.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <span className="px-2 py-0.5 text-[9px] font-black tracking-widest text-blue-905 bg-blue-50 text-blue-900 rounded border border-blue-100 uppercase">
                  Local Contractor
                </span>
                <span className="text-xs text-gray-400 font-bold">Licenciado</span>
              </div>
            </div>

            {/* Column 2: Quick Links (Col Span 3) */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-[10px] font-black uppercase text-blue-900 tracking-wider">Enlaces Directos</h4>
              <ul className="space-y-2 text-xs font-bold text-gray-600">
                <li><button onClick={() => scrollTo('inicio')} className="hover:text-blue-900 transition-colors cursor-pointer text-left">Inicio</button></li>
                <li><button onClick={() => scrollTo('nosotros')} className="hover:text-blue-900 transition-colors cursor-pointer text-left">Sobre Nosotros</button></li>
                <li><button onClick={() => scrollTo('servicios')} className="hover:text-blue-900 transition-colors cursor-pointer text-left">Nuestros Servicios</button></li>
                <li><button onClick={() => scrollTo('galeria')} className="hover:text-blue-900 transition-colors cursor-pointer text-left">Galería de Obras</button></li>
                <li><button onClick={() => scrollTo('contacto')} className="hover:text-blue-900 transition-colors cursor-pointer text-left">Presupuestos Gratis</button></li>
              </ul>
            </div>

            {/* Column 3: Contact Info (Col Span 5) */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-[10px] font-black uppercase text-blue-900 tracking-wider">Atención al Propietario</h4>
              
              <ul className="space-y-3 text-xs font-bold text-gray-600">
                <li className="flex items-start gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-900 font-black leading-none pb-0.5">WhatsApp Directo:</p>
                    <div className="flex flex-col gap-1">
                      <a 
                        href="https://wa.me/14084898012" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-emerald-500 text-emerald-600 font-mono font-bold block"
                      >
                        (408) 489-8012
                      </a>
                      <p className="text-[10px] text-gray-400">Le responderemos en un plazo de hasta 24hs</p>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-blue-900 flex-shrink-0 mt-0.5" />
                  <div className="overflow-hidden">
                    <p className="text-blue-900 font-black leading-none pb-0.5">Correo Directo:</p>
                    <a href="mailto:l4construction79@gmail.com" className="hover:text-blue-900 text-gray-500 truncate block font-sans">l4construction79@gmail.com</a>
                    <p className="text-[10px] text-gray-400 mt-1">Le responderemos en un plazo de hasta 24hs</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-900 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-900 font-black leading-none pb-0.5">Servicio:</p>
                    <span className="text-gray-500 leading-normal">Toda la región (Nueva York: Brooklyn, Queens, Bronx, Manhattan, Staten Island, Long Island; New Jersey: Newark, Jersey City, Paterson, Elizabeth, etc.).</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright signature */}
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] sm:text-xs text-gray-400 font-bold">
            <p>
              © {new Date().getFullYear()} L4 Construction & General Services - Pisos y Acabados de Calidad. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-3">
              <span>Nueva York (NY) & New Jersey (NJ)</span>
              <span>•</span>
              <span>Asistencia en Español</span>
            </div>
          </div>

        </footer>

      </div>
    </div>
  );
}
