interface Props {

    level:

    "EXCELLENT"

    |

    "GOOD"

    |

    "WARNING"

    |

    "DANGER";

}

export default function HealthBadge({

    level,

}: Props) {

    const map = {

        EXCELLENT: "🟢 Excellent",

        GOOD: "🔵 Good",

        WARNING: "🟡 Warning",

        DANGER: "🔴 Danger",

    };

    return (

        <div className="rounded-xl bg-muted px-4 py-3 text-center font-semibold">

            {map[level]}

        </div>

    );

}