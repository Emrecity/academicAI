import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { routes } from "@/helpers/routes";

const navigationBar = () => {
     const navItems = [
    {
      name: "Undergraduate",
      link: `${routes.undergraduate}`,
    },
    {
      name: "Masters",
      link: `${routes.masters}`,
    },
    {
      name: "PhD",
      link:`${routes.phd}`,
    },
    {
      name: "Postdoc",
      link: `${routes.phd}`,
    },
    {
      name: "General",
      link: `${routes.general}`,
    },
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div className="relative w-full my-5">
      <Navbar className="bg-slate-600 rounded-lg dark:bg-white">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems className="text-white text-md" items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Book a review</NavbarButton>
          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a review
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
 
      {/* Navbar */}
    </div>
  );
}

export default navigationBar