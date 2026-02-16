type ListCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
};

function ListCard({ icon, title, description, items }: ListCardProps) {
  const loopItems = [...items, ...items];
  return (
    <div className="p-8 w-full min-w-0 bg-[#00384d]/10 border border-[#F5F5F5]/10 hover:border-(--color-champagne-gold)/30 transition-all shadow-lg text-center h-full flex flex-col">
      <div className="w-16 h-16 bg-(--color-champagne-gold)/10 flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="font-playfair text-xl text-[#F5F5F5] mb-2">{title}</h3>
      <p className="text-[#F5F5F5]/60 font-montserrat text-sm">{description}</p>
      <div className="relative w-full max-w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] mt-6">
        <div className="flex w-max items-center gap-3 logo-loop">
          {loopItems.map((item, index) => (
            <span
              key={`${item}-${index}`}
              aria-hidden={index >= items.length}
              className="px-4 py-2 rounded-full text-(--color-champagne-gold)/80 font-montserrat text-sm tracking-wide whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListCard;
