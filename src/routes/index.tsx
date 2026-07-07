import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import DashboardPage from "@/features/dashboard/DashboardPage";
import ScenarioBuilderPage from "@/features/scenario-builder/ScenarioBuilderPage";
import ScenarioResultPage from "@/features/scenario-result/ScenarioResultPage";
import ScenarioComparisonPage from "@/features/scenario-comparison/ScenarioComparisonPage";
import VendorsPage from "@/features/vendors/VendorsPage";
import SettingsPage from "@/features/settings/SettingsPage";
import AIInsightPage from "@/features/ai-insight/AIInsightPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "scenario-builder",
        element: <ScenarioBuilderPage />,
      },
      {
        path: "scenario-result",
        element: <ScenarioResultPage />,
      },
      {
        path: "scenario-comparison",
        element: <ScenarioComparisonPage />,
      },
      {
        path: "vendors",
        element: <VendorsPage />,
      },
      {
        path: "ai-insight",
        element: <AIInsightPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      </div>
    ),
  },
]);