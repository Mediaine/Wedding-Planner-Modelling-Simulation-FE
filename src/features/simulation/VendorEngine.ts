import type {

SelectedVendorPackage,

} from "@/types/vendor";

export class VendorEngine{

  static calculate(

    vendors:Record<

      string,

      SelectedVendorPackage

    >

  ){

    return Object

      .values(vendors)

      .reduce(

        (sum,item)=>

        sum+item.cost,

        0

      );

  }

}

