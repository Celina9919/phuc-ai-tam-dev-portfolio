import { useEffect, useState } from "react";
import { cn } from "@/lib/utils.js";
import {motion} from 'framer-motion';

export const ThemeToggle = ({ variant = "icon", className }) =>  {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        setIsLightMode(true);
        document.documentElement.classList.add("light");
    } else {
        document.documentElement.classList.remove("light");
        setIsLightMode(false);
    }
  }, []);
  
  const spring = {
       type: 'spring',
       stiffness: 700,
       damping: 30,
   };

  const toggleTheme = () => {
    const nextIsLight = !isLightMode;
    setIsLightMode(nextIsLight);

    if (nextIsLight) {
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
    }
  };

  if (
        localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)
      ) { document.documentElement.classList.add('dark') } 
      else {
        document.documentElement.classList.remove('dark')
    };


  if (variant === "drawer") {
    return (
      <div onClick={toggleTheme} className={`flex-start flex h-[38px] w-[80px] rounded-[50px] bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${ isLightMode && 'place-content-end'}`}>
            <motion.div
                className="flex h-[28px] w-[40px] items-center justify-center rounded-full bg-black/90"
                layout
                transition={spring}
                >
                <motion.div whileTap={{rotate: 360}}>
                {""}
                {isLightMode ? (
                    <iconify-icon
                        icon="line-md:moon-alt-filled-loop" 
                        width="20" 
                        height="20"  
                        style={{top:4, color:"hsl(180, 24%, 82%)"}} 
                    ></iconify-icon>
                    ) : (
                    <iconify-icon
                        icon="line-md:sun-rising-filled-loop" 
                        width="20" 
                        height="20"  
                        style={{color: "hsl(43, 100%, 70%)"}} 
                    ></iconify-icon>
                )}
                </motion.div>
            </motion.div>      
        </div>
    );
}

return (
    <div onClick={toggleTheme} className={`flex-start flex h-[38px] w-[80px] rounded-[50px] bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${ isLightMode && 'place-content-end'}`}>
            <motion.div
                className="flex h-[28px] w-[40px] items-center justify-center rounded-full bg-black/90"
                layout
                transition={spring}
                >
                <motion.div whileTap={{rotate: 360}}>
                {""}
                {isLightMode ? (
                    <iconify-icon
                        icon="line-md:moon-alt-filled-loop" 
                        width="20" 
                        height="20"  
                        style={{top:4, color:"hsl(180, 24%, 82%)"}} 
                    ></iconify-icon>
                    ) : (
                    <iconify-icon
                        icon="line-md:sun-rising-filled-loop" 
                        width="20" 
                        height="20"  
                        style={{color: "hsl(43, 100%, 70%)"}} 
                    ></iconify-icon>
                )}
                </motion.div>
            </motion.div>      
        </div>
  );
};