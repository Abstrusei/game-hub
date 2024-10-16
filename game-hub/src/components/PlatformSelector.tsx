import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { IPlatform } from "../hooks/usePlatforms";

interface IPlatformSelectorProps {
  onSelectPlatform: (platform: IPlatform) => void;
  selectedPlatform: IPlatform | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: IPlatformSelectorProps) => {
  const { data: platforms } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
