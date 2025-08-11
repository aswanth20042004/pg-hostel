import PGCard from "./PGCard";
import pg2SharingImage from "@/assets/pg-2-sharing.jpg";
import pg3SharingImage from "@/assets/pg-3-sharing.jpg";
import pg4SharingImage from "@/assets/pg-4-sharing.jpg";

const PGListings = () => {
  const pgData = [
    {
      type: "2-sharing" as const,
      price: 10000,
      image: pg2SharingImage,
      title: "Premium 2-Sharing Room",
      location: "Koramangala, Bangalore",
      features: ["WiFi", "Meals", "Security", "Parking"]
    },
    {
      type: "2-sharing" as const,
      price: 10000,
      image: pg2SharingImage,
      title: "Deluxe 2-Sharing Room",
      location: "BTM Layout, Bangalore",
      features: ["WiFi", "Meals", "Security", "AC"]
    },
    {
      type: "3-sharing" as const,
      price: 8000,
      image: pg3SharingImage,
      title: "Comfort 3-Sharing Room",
      location: "Electronic City, Bangalore",
      features: ["WiFi", "Meals", "Security", "Laundry"]
    },
    {
      type: "3-sharing" as const,
      price: 8000,
      image: pg3SharingImage,
      title: "Standard 3-Sharing Room",
      location: "Whitefield, Bangalore",
      features: ["WiFi", "Meals", "Security", "Parking"]
    },
    {
      type: "4-sharing" as const,
      price: 7000,
      image: pg4SharingImage,
      title: "Budget 4-Sharing Room",
      location: "Marathahalli, Bangalore",
      features: ["WiFi", "Meals", "Security"]
    },
    {
      type: "4-sharing" as const,
      price: 7000,
      image: pg4SharingImage,
      title: "Economy 4-Sharing Room",
      location: "HSR Layout, Bangalore",
      features: ["WiFi", "Meals", "Security", "Gym"]
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Available PG 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Hostels
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of comfortable and affordable PG accommodations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pgData.map((pg, index) => (
            <PGCard
              key={index}
              type={pg.type}
              price={pg.price}
              image={pg.image}
              title={pg.title}
              location={pg.location}
              features={pg.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PGListings;