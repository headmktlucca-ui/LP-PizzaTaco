import React, { useState, useMemo } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../data/pizzaData';
import fdBlogBg from '../assets/images/fd_blog.png';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  MessageCircle, 
  Sparkles,
  Tag,
  ChevronRight,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface BlogProps {
  onNavigateHome: () => void;
  onOpenWhatsapp?: () => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigateHome }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ['Todos', 'Dicas para Festas', 'Gastronomia', 'Bastidores', 'Eventos Corporativos'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  }, []);

  const handleWhatsappClick = (customText?: string) => {
    const defaultMsg = 'Olá! Li um artigo no blog Além dos Sabores e gostaria de saber mais sobre o buffet Pizza Taco para o meu evento!';
    const text = encodeURIComponent(customText || defaultMsg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  // If viewing a single post detail view
  if (selectedPost) {
    return (
      <div className="pt-28 pb-20 bg-[#FFFBF0] min-h-screen text-[#2D2D2D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Top Navigation Back */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
            <button
              onClick={() => setSelectedPost(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 text-[#236034] font-bold text-xs uppercase tracking-wider hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Blog</span>
            </button>

            <span className="text-xs font-black uppercase tracking-widest text-[#D42424] bg-[#D42424]/10 px-3 py-1 rounded-full">
              {selectedPost.category}
            </span>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="font-bouncer text-2xl sm:text-4xl lg:text-5xl text-[#2D2D2D] leading-tight mb-4">
              {selectedPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-500 mb-6">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#236034]" />
                {selectedPost.author.name} ({selectedPost.author.role})
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#D42424]" />
                {selectedPost.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                {selectedPost.readTime}
              </span>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white mb-8 group max-h-[420px]">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover max-h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </header>

          {/* Article Body */}
          <article className="prose prose-lg max-w-none text-stone-800 leading-relaxed space-y-6 text-base sm:text-lg bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-stone-200/80 mb-12">
            {selectedPost.content.map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="font-bouncer text-xl sm:text-2xl text-[#236034] pt-4 mb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <div key={idx} className="flex items-start gap-3 my-2 text-stone-700">
                    <CheckCircle2 className="w-5 h-5 text-[#236034] shrink-0 mt-0.5" />
                    <span>{paragraph.replace('- ', '')}</span>
                  </div>
                );
              }
              return (
                <p key={idx} className="text-stone-700 font-medium leading-relaxed">
                  {paragraph}
                </p>
              );
            })}

            {/* Article Tags */}
            <div className="pt-6 mt-8 border-t border-stone-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1 mr-2">
                <Tag className="w-3.5 h-3.5" /> Tags:
              </span>
              {selectedPost.tags.map(tag => (
                <span key={tag} className="text-xs font-semibold bg-stone-100 text-stone-700 px-3 py-1 rounded-lg border border-stone-200">
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          {/* CTA Box inside Post */}
          <div className="bg-gradient-to-br from-[#FFEBB4] to-amber-100 rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-lg text-center relative overflow-hidden mb-12">
            <div className="max-w-xl mx-auto space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#D42424] text-white text-xs font-black uppercase tracking-wider">
                Leve o Pizza Taco para sua Festa
              </span>
              <h3 className="font-bouncer text-2xl sm:text-3xl text-[#2D2D2D]">
                Gostou das dicas?
              </h3>
              <p className="text-sm sm:text-base text-stone-700 font-medium">
                Sua festa merece um buffet de pizza artesanal assado na hora com praticidade e sabor inesquecível. Solicite seu orçamento sem compromisso!
              </p>
              <button
                onClick={() => handleWhatsappClick(`Olá! Li o artigo "${selectedPost.title}" e gostaria de solicitar um orçamento para o meu evento!`)}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#236034] hover:bg-[#1b4c29] text-white font-black text-sm uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Simular Orçamento no WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Related Articles navigation */}
          <div className="border-t border-stone-200 pt-8">
            <h4 className="font-bouncer text-xl text-[#2D2D2D] mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D42424]" />
              Outros Artigos no Blog Além dos Sabores
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BLOG_POSTS.filter(p => p.id !== selectedPost.id).slice(0, 2).map(post => (
                <div
                  key={post.id}
                  onClick={() => {
                    setSelectedPost(post);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-[#236034] transition-all cursor-pointer flex gap-4 items-center group shadow-sm hover:shadow-md"
                >
                  <img src={post.image} alt={post.title} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase text-[#D42424] tracking-wider">{post.category}</span>
                    <h5 className="font-bold text-xs sm:text-sm text-[#2D2D2D] line-clamp-2 group-hover:text-[#236034] transition-colors">
                      {post.title}
                    </h5>
                    <span className="text-[11px] text-stone-400 font-medium block">{post.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-[#FFFBF0] min-h-screen text-[#2D2D2D]">
      
      {/* Hero Blog Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div 
          className="rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-amber-500/20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${fdBlogBg})` }}
        >
          {/* Overlay suave com gradiente para destacar o fundo mantendo a leitura do texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/15 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 font-bold text-xs uppercase tracking-wider mb-4">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>O Blog Oficial da Pizza Taco</span>
            </div>

            <h1 className="font-bouncer text-3xl sm:text-5xl lg:text-6xl tracking-wide text-white mb-4 leading-tight">
              Além dos <span className="text-amber-400">Sabores</span>
            </h1>

            <p className="text-amber-100/90 text-sm sm:text-lg font-medium leading-relaxed max-w-2xl mb-8">
              Explore histórias de gastronomia, guias práticos para organizar recepções inesquecíveis, combinações de sabores e os bastidores do nosso buffet de pizzas artesanais.
            </p>

            {/* Search Input */}
            <div className="relative max-w-md">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar receitas, dicas para festas, bastidores..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === category
                  ? 'bg-[#236034] text-white shadow-md scale-105'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Main Post (Show if category is 'Todos' and no search query) */}
      {selectedCategory === 'Todos' && !searchQuery && featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div 
            onClick={() => {
              setSelectedPost(featuredPost);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-white rounded-3xl border border-stone-200 shadow-lg hover:shadow-xl transition-all overflow-hidden cursor-pointer grid grid-cols-1 lg:grid-cols-12 group"
          >
            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[380px] overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#D42424] text-white font-black text-xs uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                <span>Destaque Principal</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
                  <span className="text-[#236034]">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 className="font-bouncer text-2xl sm:text-3xl text-[#2D2D2D] group-hover:text-[#236034] transition-colors leading-snug mb-4">
                  {featuredPost.title}
                </h2>

                <p className="text-stone-600 font-medium text-sm sm:text-base leading-relaxed line-clamp-4 mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center font-bold text-stone-700 text-xs">
                    PT
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2D2D2D] block">{featuredPost.author.name}</span>
                    <span className="text-[11px] text-stone-400 block">{featuredPost.date}</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-black text-[#236034] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Ler Artigo <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-bouncer text-2xl sm:text-3xl text-[#2D2D2D]">
            {selectedCategory === 'Todos' ? 'Todos os Artigos' : `Artigos sobre: ${selectedCategory}`}
          </h2>
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'artigo' : 'artigos'}
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 max-w-lg mx-auto my-8">
            <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="font-bold text-lg text-stone-700 mb-1">Nenhum artigo encontrado</h3>
            <p className="text-sm text-stone-500 mb-4">Tente buscar por outros termos ou mudar a categoria selecionada.</p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#236034] text-white text-xs font-bold uppercase tracking-wider"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => {
                  setSelectedPost(post);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#236034] font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>

                    <h3 className="font-bouncer text-xl text-[#2D2D2D] group-hover:text-[#236034] transition-colors leading-snug mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-stone-600 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-500">{post.author.name}</span>
                  <span className="text-xs font-black text-[#D42424] uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Ler Mais →
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Bottom Newsletter/CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFEBB4] rounded-3xl p-8 sm:p-12 border-2 border-amber-300/80 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-[#D42424] bg-white px-3 py-1 rounded-full inline-block shadow-sm">
              Eventos & Buffets
            </span>
            <h3 className="font-bouncer text-2xl sm:text-4xl text-[#2D2D2D]">
              Quer levar o Pizza Taco para o seu próximo evento?
            </h3>
            <p className="text-stone-700 text-sm sm:text-base font-medium">
              Atendemos aniversários, casamentos, confraternizações de empresas e reuniões em casa em São Paulo e região.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => handleWhatsappClick()}
              className="px-6 py-3.5 rounded-full bg-[#236034] hover:bg-[#1b4c29] text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0" />
              <span>Chamar no WhatsApp</span>
            </button>

            <button
              onClick={onNavigateHome}
              className="px-6 py-3.5 rounded-full bg-white text-[#2D2D2D] font-bold text-xs uppercase tracking-wider border border-stone-300 hover:bg-stone-50 transition-all cursor-pointer"
            >
              Ver Cardápio Completo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
