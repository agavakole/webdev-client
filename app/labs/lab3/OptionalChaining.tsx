type House = {
  bedrooms: number;
  address?: {
    street: string;
    city: string;
    zip?: string;
  };
  garage?: {
    cars: number;
  };
};

export default function OptionalChaining() {
  const house: House = {
    bedrooms: 4,
    address: {
      street: "Via Roma",
      city: "Roma",
    },
  };

  const missing = undefined as { prop?: string } | undefined;

  const house2 = {
    yearBuilt: 2020,
    owners: ["Alice", "Bob"],
  };

  const sampleCourse = {
    name: "Computer Science",
    code: "CS101",
  };

  return (
    <div id="wd-optional-chaining">
      <h4>Optional Chaining</h4>
      house.address?.city = {house.address?.city} <br />
      missing?.prop ?? "n/a" = {missing?.prop ?? "n/a"} <br />
      house.garage?.cars ?? 0 = {house.garage?.cars ?? 0} <br />
      house.address?.zip ?? "unknown" = {house.address?.zip ?? "unknown"} <br />
      house2 = {JSON.stringify(house2)} <br />
      yearBuilt = {house2.yearBuilt} <br />
      owners = {house2.owners.join(", ")} <br />
      sampleCourse = {JSON.stringify(sampleCourse)} <br />
      <hr />
    </div>
  );
}
