import { Button, ButtonLink } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";

export const HeaderMenu = () => {
  return (
    <nav aria-label="Account">
      <ul className="flex items-center gap-4 md:gap-8">
        <li className="hidden md:flex md:items-center">
          <Button variant="ghost" aria-label="Search">
            <Icon name="search" className="size-[20px]" />
          </Button>
        </li>
        <li className="flex items-center">
          <ButtonLink variant="ghost" href="/favorites" aria-label="Favorites">
            <Icon name="favorite" className="size-[20px]" />
          </ButtonLink>
        </li>
        <li className="flex items-center">
          <Button variant="ghost" aria-label="Cart">
            <Icon name="cart" className="size-[20px]" />
          </Button>
        </li>
      </ul>
    </nav>
  );
};
