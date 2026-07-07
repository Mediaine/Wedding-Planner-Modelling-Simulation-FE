import {
  Check,
  HeartHandshake,
} from "lucide-react";

import AppCard from "@/components/common/AppCard";

import { useBuilderStore } from "@/stores/builder.store";

const concepts = [

  {

    value:"DIY",

    title:"DIY",

    description:"Find and manage vendors yourself.",

  },

  {

    value:"Hybrid",

    title:"Hybrid",

    description:"Mix Wedding Organizer with your own vendors.",

  },

  {

    value:"Full Package",

    title:"Full Package",

    description:"Everything handled by Wedding Organizer.",

  },

] as const;

export default function WeddingConcept(){

const{

scenario,

updateBasic,

}=useBuilderStore();

return(

<AppCard>

<div className="flex items-center gap-3 mb-6">

<HeartHandshake className="text-primary"/>

<div>

<h3 className="font-semibold text-lg">

Wedding Concept

</h3>

<p className="text-muted-foreground text-sm">

Choose your wedding planning strategy.

</p>

</div>

</div>

<div className="grid gap-5 lg:grid-cols-3">

{

concepts.map((item)=>{

const active=scenario.basic.concept===item.value;

return(

<button
key={item.value}
onClick={()=>
updateBasic({
concept:item.value,
})
}
className={`
rounded-2xl
border
p-6
text-left
transition-all

${

active

?

"border-primary bg-primary/5 shadow"

:

"hover:border-primary"

}

`}
>

<div className="flex items-center justify-between">

<h4 className="font-semibold">

{item.title}

</h4>

{

active&&<Check
size={18}
/>

}

</div>

<p className="mt-4 text-sm text-muted-foreground">

{item.description}

</p>

</button>

);

})

}

</div>

</AppCard>

);

}