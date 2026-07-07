import { NavLink } from "react-router-dom";

import { navigation } from "@/config/navigation";
import { appConfig } from "@/config/app";

export default function Sidebar() {
  return (
    <aside className="flex w-72 flex-col border-r bg-white">

      <div className="border-b p-6">

        <h2 className="text-xl font-bold">

          💍 {appConfig.name}

        </h2>

        <p className="mt-2 text-sm text-muted-foreground">

          Wedding Modelling & Simulation

        </p>

      </div>

      <nav className="flex-1 space-y-1 p-4">

        {navigation.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`
              }
            >
              <Icon size={20} />

              <span>{item.title}</span>

            </NavLink>

          );
        })}

      </nav>

      <div className="border-t p-6">

        <div className="text-sm">

          Version

        </div>

        <div className="font-semibold">

          {appConfig.version}

        </div>

        <div className="mt-4 text-sm">

          Simulation Mode

        </div>

        <div className="font-semibold text-green-600">

          {appConfig.simulationMode}

        </div>

      </div>

    </aside>
  );
}