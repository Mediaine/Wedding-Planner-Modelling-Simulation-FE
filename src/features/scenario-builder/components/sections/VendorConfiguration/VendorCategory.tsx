import VendorPackageList from "./VendorPackageList";
import { vendors } from "./vendor.data";

interface Props {

  category: string;

}

export default function VendorCategory({

  category,

}: Props) {

  const list =
    vendors.filter(
      x => x.category === category
    );

  return (

    <div className="space-y-8">

      <h2 className="text-2xl font-bold">

        {category}

      </h2>

      {

        list.map((vendor)=>(

          <div
            key={vendor.id}
            className="space-y-4"
          >

            <h3 className="text-lg font-semibold">

              {vendor.name}

            </h3>

            <VendorPackageList
              vendor={vendor}
            />

          </div>

        ))

      }

    </div>

  );

}