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
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex gap-4">
              <div>
                Kadın
                <ul>
                  <li>
                    <NavigationMenuLink>
                      {" "}
                      <a href="">Link</a>{" "}
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink>
                      {" "}
                      <a href="">Link</a>{" "}
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
              <div>
                Kadın
                <ul>
                  <li>
                    <NavigationMenuLink>
                      {" "}
                      <a href="">Link</a>{" "}
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink>
                      {" "}
                      <a href="">Link</a>{" "}
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2">
              <li className="row-span-3">
                <NavigationMenuLink>Link</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
