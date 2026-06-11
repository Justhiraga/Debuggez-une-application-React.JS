/**
 * 
 */
import { getMonth } from "../../helpers/Date";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            const returnedValue = getMonth(new Date("2022-01-01"));
            expect(returnedValue).toBe("janvier");
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            const returnedValue = getMonth(new Date("2022-07-08"));
            expect(returnedValue).toBe("juillet");
        });
    });
})

