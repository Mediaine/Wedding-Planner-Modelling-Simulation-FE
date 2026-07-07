export class BudgetEngine {

  static remaining(

    budget:number,

    spent:number,

  ){

    return budget-spent;

  }

  static percentage(

    budget:number,

    spent:number,

  ){

    if(budget===0){

      return 0;

    }

    return Math.round(

      (spent/budget)*100

    );

  }

}