interface Props {
  title: string;
  description?: string;
}

export default function SectionHeader({
  title,
  description,
}: Props) {
  return (
    <div className="mb-5">

      <h2 className="text-xl font-semibold">

        {title}

      </h2>

      {description && (

        <p className="text-muted-foreground">

          {description}

        </p>

      )}

    </div>
  );
}