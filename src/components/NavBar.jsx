import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/docs">Home</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>My account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="text-second-text-color link flex gap-10">
              <div>
                <span className="text-text-color">Kadın</span>
                <ul>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Bags</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Belts</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Cosmetics</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Bags</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Hats</a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-text-color">Erkek</span>
                <ul>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Bags</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Belts</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Cosmetics</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Bags</a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <a href="">Hats</a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/about">About</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/blog">Blog</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/contact">Contact</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a href="/pages">Pages</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
