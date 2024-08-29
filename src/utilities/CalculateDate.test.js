import { calculateDate, convertDateToString, convertWordsToInterval } from "./CalculateDate";

describe("convertDateToString", () => {
    test("Handle Single Day", () => {
        expect(convertDateToString(1)).toEqual('Due in 1 Day');
    });

    test("Handle Multiple Days", () => {
        expect(convertDateToString(3)).toEqual('Due in 3 Days');
    });

    test("Handle Single Week", () => {
        expect(convertDateToString(7)).toEqual('Due in 1 Week');
    });

    test("Handle Multiple Weeks", () => {
        expect(convertDateToString(21)).toEqual('Due in 3 Weeks');
    });

    test("Handle Current Day", () => {
        expect(convertDateToString(0)).toEqual('Due Today');
    });
})

describe("convertWordsToInterval", () => {
    test("Handle Day", () => {
        expect(convertWordsToInterval('1 day')).toEqual(1);
    });
    
    test("Handle Days", () => {
        expect(convertWordsToInterval('3 day')).toEqual(3);
    });
    
    test("Handle Week", () => {
        expect(convertWordsToInterval('1 week')).toEqual(7);
    });
    
    test("Handle Weeks", () => {
        expect(convertWordsToInterval('3 weeks')).toEqual(21);
    });
    
    test("Handle CAPS", () => {
        expect(convertWordsToInterval('3 WEEKS')).toEqual(21);
    })

    test("Handle Extra Spaces", () => {
        expect(convertWordsToInterval(' 3  Days')).toEqual(3);
    })

    test("Handle Single Word or Number", () => {
        expect(convertWordsToInterval('3')).toEqual(null);
    })

    test("Handle Invalid Word", () => {
        expect(convertWordsToInterval('1 Waffle')).toEqual(null);
    })
})
