import CategoryGrid from "@/components/CategoryGrid";

function LaptopIndex() {
  const laptopItems = [
    {
      name: 'Ultrabook',
      image: 'https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg',
    },
    {
      name: 'Gaming Laptop',
      image: 'https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg',
    },
    {
      name: 'Business Laptop',
      image: 'https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg',
    },
    {
      name: 'Convertible',
      image: 'https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg',
    },

  ];
  return (
    <>
      <div className="utility-spacing">
        <CategoryGrid title="Laptops" items={laptopItems} />
      </div>

    </>
  )

}

export default LaptopIndex;