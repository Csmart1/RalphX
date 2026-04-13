function Footer() {
  return (
    <footer className="py-12 border-t border-gray-900 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
       
        <div className="flex flex-col items-start text-left">
          <div className="flex items-center gap-1 mb-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              RalphX
            </h3>
            
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-gray-400 text-sm font-medium">
          <a href="#home" className="hover:text-purple-400 transition">Home</a>
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">GitHub</a>
          <a href="https://csmart1.github.io/travel-better/index.html" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">LinkedIn</a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;