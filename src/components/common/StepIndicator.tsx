interface Props {

  current: number;

}

export default function StepIndicator({

  current,

}: Props) {

  const steps = [1,2,3,4,5,6];

  return (

    <div className="flex items-center gap-3">

      {steps.map((step)=> (

        <div
          key={step}
          className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold
          ${
            current>=step
              ? "bg-primary text-white"
              : "bg-muted"
          }`}
        >

          {step}

        </div>

      ))}

    </div>

  );

}