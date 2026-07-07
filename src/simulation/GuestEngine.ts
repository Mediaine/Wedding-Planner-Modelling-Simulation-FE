export class GuestEngine {
  static calculateAttendance(
    invitation: number,
  ): number {
    return invitation * 2;
  }

  static calculateFoodCost(
    attendance: number,
    mealPrice = 45000,
  ): number {
    return attendance * mealPrice;
  }
}