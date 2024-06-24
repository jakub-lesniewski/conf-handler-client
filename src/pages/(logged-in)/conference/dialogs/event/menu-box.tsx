import { Menu } from "@/types/Menu";

type MenuBoxProps = {
  menu: Menu;
};

export default function MenuBox({ menu }: MenuBoxProps) {
  const { header, menuItems } = menu;

  return (
    <div className="border-b pb-2">
      <h1 className="border-b pb-1 font-semibold">{header}</h1>
      <ul className="ml-1 max-h-[60svh] list-disc space-y-1 overflow-auto">
        {menuItems.map((item, index) => (
          <li key={index}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}
