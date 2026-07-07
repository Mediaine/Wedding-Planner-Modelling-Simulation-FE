// import VendorCategory from "./VendorCategory";

// export default function VendorConfiguration(){

// return(

// <div className="space-y-10">

// <VendorCategory

// category="Documentation"

// />

// <VendorCategory

// category="Service"

// />

// <VendorCategory

// category="Food & Beverage"

// />

// </div>

// );

// }

import VendorCategory from "./VendorCategory";

export default function VendorConfiguration(){

return(

<div className="space-y-12">

<VendorCategory

category="Documentation"

/>

<VendorCategory

category="Food & Beverage"

/>

</div>

);

}