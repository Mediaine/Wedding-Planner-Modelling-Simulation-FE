import {
    Brain,
    Sparkles,
} from "lucide-react";

import {
    useEffect,
    useMemo,
    useState,
} from "react";

import { useNavigate } from "react-router-dom";
import SimulationProgress from "./components/SimulationProgress";
import SimulationSteps from "./components/SimulationSteps";
import SimulationStatus from "./components/SimulationStatus";
import { useBuilderStore } from "@/stores/builder.store";

const TOTAL_DURATION = 30000;

const STEP_DURATION = 3000;

const steps = [

    "Reading Wedding Scenario",

    "Analyzing Budget",

    "Calculating Guest Attendance",

    "Checking Venue Capacity",

    "Evaluating Vendors",

    "Analyzing Wedding Tradition",

    "Optimizing Budget Allocation",

    "Calculating Wedding Health",

    "Generating AI Recommendation",
    "Generating AI Insight",
    "Finalizing Simulation",
];

export default function SimulationLoadingPage() {

    const { scenario } =
        useBuilderStore();

    const navigate =
        useNavigate();

    const [progress, setProgress] =
        useState(0);

    const [currentStep, setCurrentStep] =
        useState(0);

    const start =
        useMemo(
            () => Date.now(),
            [],
        );

    useEffect(() => {

        const timer =
            setInterval(() => {

                const elapsed =
                    Date.now() - start;

                const percent =
                    Math.min(
                        100,
                        Math.round(
                            (elapsed / TOTAL_DURATION) *
                            100,
                        ),
                    );

                setProgress(percent);

                const step =
                    Math.min(
                        steps.length - 1,
                        Math.floor(
                            elapsed / STEP_DURATION,
                        ),
                    );

                setCurrentStep(step);

                if (elapsed >= TOTAL_DURATION) {

                    clearInterval(timer);

                    navigate(
                        "/scenario-result",
                        {
                            replace: true,
                        },
                    );

                }

            }, 100);

        return () =>
            clearInterval(timer);

    }, [
        navigate,
        start,
    ]);

    return (

        <div className="min-h-screen bg-background">
            <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center p-6">
                <div className="w-full rounded-3xl bg-white p-10">

                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-5">
                            <Brain
                                size={40}
                                className="animate-pulse"
                            />
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold">
                                Wedding Planner Intelligence Platform
                            </h1>

                            <p className="text-muted-foreground">
                                Simulation Engine
                            </p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <SimulationProgress
                            progress={progress}
                        />
                    </div>

                    <div className="mt-10 rounded-2xl border bg-muted/30 p-6">
                        <div className="flex items-center gap-3">
                            <Sparkles
                                className="animate-pulse text-primary"
                                size={20}
                            />
                            <span className="font-semibold">
                                Current Task
                            </span>
                        </div>

                        <h2 className="mt-5 text-2xl font-bold">
                            {steps[currentStep]}
                        </h2>

                        <p className="mt-3 text-muted-foreground">
                            Please wait while our AI evaluates your
                            wedding scenario and generates the best
                            possible recommendation.
                        </p>
                    </div>

                    <div className="mt-10">
                        <SimulationSteps
                            steps={steps}
                            currentStep={currentStep}
                        />
                    </div>

                    <div className="mt-10">
                        <SimulationStatus
                            budget={
                                scenario.basic.budget
                            }

                            guest={
                                scenario.guest.estimatedAttendance
                            }

                            venue={
                                scenario.venue.venueType
                            }

                            vendor={
                                Object.keys(
                                    scenario.vendor.selectedPackages,
                                ).length
                            }
                        />
                    </div>

                </div>
            </div>
        </div>

    );

}