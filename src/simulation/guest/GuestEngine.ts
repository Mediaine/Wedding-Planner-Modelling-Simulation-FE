export class GuestEngine {

    static calculateAttendance(
        invitation: number,
    ): number {
        return invitation * 2;
    }

    static calculateFoodCost(
        attendance: number,
        mealPrice: number,
    ): number {
        return attendance * mealPrice;
    }

}

