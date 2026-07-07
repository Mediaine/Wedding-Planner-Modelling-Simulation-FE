import GuestInformation from "./GuestInformation";
import AttendanceEstimation from "./AttendanceEstimation";
import MealConfiguration from "./MealConfiguration";
import SeatingConfiguration from "./SeatingConfiguration";

export default function GuestConfiguration() {
  return (
    <div className="space-y-8">
      <GuestInformation />
      <AttendanceEstimation />
      <MealConfiguration />
      <SeatingConfiguration />
    </div>
  );
}