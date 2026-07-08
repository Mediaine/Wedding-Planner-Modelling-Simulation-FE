import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";

import { FileSearch } from "lucide-react";

export default function EmptyResult() {

    const navigate = useNavigate();

    return (

        <div className="flex min-h-[70vh] items-center justify-center">

            <div className="w-full max-w-lg rounded-2xl border bg-card p-10 text-center shadow-sm">

                <FileSearch
                    size={56}
                    className="mx-auto text-muted-foreground"
                />

                <h1 className="mt-6 text-3xl font-bold">

                    No Simulation Result

                </h1>

                <p className="mt-3 text-muted-foreground">

                    You haven't run any wedding simulation yet.

                    <br />

                    Complete the Scenario Builder first, then click

                    <strong> Run Simulation</strong>.

                </p>

                <Button
                    className="mt-8 w-full"
                    onClick={() =>
                        navigate("/scenario-builder")
                    }
                >

                    Back to Scenario Builder

                </Button>

            </div>

        </div>

    );

}