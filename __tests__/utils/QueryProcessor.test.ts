import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return largest number', () => {
        const query = "largest%20number%20?%20123,%204,%207";
        const response: string = QueryProcessor(query);
        expect(response).toBe(("123"));
    });

    test('should return correct sum of ints', () => {
        const query = "8 plus 100";
        const response: string = QueryProcessor(query);
        expect(response).toBe(("108"));
    });

});