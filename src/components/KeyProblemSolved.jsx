import Card from "./Card";

const KeyProblemSolved = () => {
  const cardData = [
    {
      image:
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg",
      heading: "What to order",
      description:
        "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg",
      heading: "When to order",
      description:
        "Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg",
      heading: "How much to stock",
      description:
        "Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg",
      heading: "Where to place",
      description:
        "Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.",
    },
  ];

  return (
    <>
      <section className=" mt-40 ">
        <div>
          <h1 className="text-2xl flex justify-center items-center mb-20">
            Four Key questions answered by Crest
          </h1>
          <div className="mt-8 grid grid-cols-1 gap-10 mx-20 md:grid-cols-2 lg:grid-cols-4">
            {cardData.map((cardData, index) => (
              <Card
                key={index}
                image={cardData.image}
                heading={cardData.heading}
                description={cardData.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyProblemSolved;
