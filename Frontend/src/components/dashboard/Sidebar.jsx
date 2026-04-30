import React, { useState, useRef } from 'react';
import { LayoutDashboard, Briefcase, BarChart3, Lightbulb, Settings, HelpCircle, Sparkles, Target, Megaphone, Terminal, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

const DockItem = ({ item, isActive, isHoveredSidebar, mouseY }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Calculate distance from mouse pointer to the vertical center of this icon
    let distance = useTransform(mouseY, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
        return val - bounds.y - bounds.height / 2;
    });

    // Dynamic sizing based on proximity (Macbook Dock effect)
    let sizeSync = useTransform(distance, [-150, 0, 150], [48, 76, 48]);
    let size = useSpring(sizeSync, { mass: 0.1, stiffness: 250, damping: 20 });
    
    // Smoothly scale the icon inside
    let iconScaleSync = useTransform(distance, [-150, 0, 150], [1, 1.4, 1]);
    let iconScale = useSpring(iconScaleSync, { mass: 0.1, stiffness: 250, damping: 20 });

    const shouldShow = isHoveredSidebar || item.important || isActive;

    if (!shouldShow) return null;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full flex justify-center items-center py-1 flex-shrink-0"
        >
            <motion.div
                ref={ref}
                style={{ width: size, height: size }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative flex items-center justify-center rounded-[20px] transition-colors duration-200 cursor-pointer ${
                    isActive ? 'bg-[#1C3A3A] text-white shadow-xl shadow-teal-900/20' : 'hover:bg-slate-50 text-slate-400 hover:text-[#1C3A3A]'
                }`}
            >
                <Link to={item.path} className="w-full h-full flex items-center justify-center absolute inset-0 z-10 rounded-[20px]">
                    <motion.div style={{ scale: iconScale }} className="flex items-center justify-center">
                        <item.icon size={22} strokeWidth={2.5} />
                    </motion.div>
                </Link>

                {/* macOS Pop-up Tooltip */}
                <AnimatePresence>
                   {isHovered && isHoveredSidebar && (
                       <motion.div 
                          initial={{ opacity: 0, x: -10, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: -5, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-[110%] ml-4 bg-white text-[#1C3A3A] border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.1)] px-4 py-2 font-black uppercase text-[10px] tracking-widest rounded-xl whitespace-nowrap z-[100]"
                       >
                           {item.label}
                       </motion.div>
                   )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

const Sidebar = () => {
  const location = useLocation();
  const [isHoveredSidebar, setIsHoveredSidebar] = useState(false);
  const mouseY = useMotionValue(Infinity);

  const menuItems = [
    { icon: LayoutDashboard, path: '/dashboard', label: 'Dashboard', important: true },
    { icon: Briefcase, path: '/campaigns', label: 'Campaigns', important: true },
    { icon: Megaphone, path: '/upload', label: 'Creative Upload' },
    { icon: Sparkles, path: '/keywords', label: 'Keywords' },
    { icon: Target, path: '/budget', label: 'Budget' },
    { icon: BarChart3, path: '/analytics', label: 'Analytics', important: true },
    { icon: Shield, path: '/admin', label: 'Admin Center' },
    { icon: Terminal, path: '/dashboard-state', label: 'System Status' },
    { icon: Settings, path: '/settings', label: 'Settings', important: true },
  ];

  return (
    <aside 
      className="fixed left-0 top-0 h-screen w-20 bg-white border-r border-slate-100 flex flex-col items-center py-8 z-50 transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.02)]"
      onMouseEnter={() => setIsHoveredSidebar(true)}
      onMouseLeave={() => {
          setIsHoveredSidebar(false);
          mouseY.set(Infinity);
      }}
      onMouseMove={(e) => mouseY.set(e.clientY)}
    >
      <div className="mb-8 text-[#1C3A3A]">
        <Link to="/">
          <div className="bg-[#1C3A3A] p-2 rounded-lg transition-transform duration-500 hover:rotate-90">
            <div className="w-5 h-5 bg-white rounded-sm rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-[#1C3A3A] rounded-full"></div>
            </div>
          </div>
        </Link>
      </div>

      <nav className="flex flex-col flex-1 w-full items-center px-1 overflow-visible relative">
        <AnimatePresence initial={false}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
                <DockItem 
                    key={item.path} 
                    item={item} 
                    isActive={isActive} 
                    isHoveredSidebar={isHoveredSidebar} 
                    mouseY={mouseY} 
                />
            );
          })}
        </AnimatePresence>
      </nav>

      <div className="mt-auto px-2 w-full">
         <DockItem 
            item={{ icon: HelpCircle, path: '#', label: 'Help & Docs', important: true }} 
            isActive={false} 
            isHoveredSidebar={isHoveredSidebar} 
            mouseY={mouseY} 
        />
      </div>
    </aside>
  );
};

export default Sidebar;
