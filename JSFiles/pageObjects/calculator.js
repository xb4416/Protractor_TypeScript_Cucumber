"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
const protractor_1 = require("protractor");
class calculator {
    constructor() {
        this.firsteditbox = protractor_1.element(protractor_1.by.model("first"));
        this.secodeditbox = protractor_1.element(protractor_1.by.model("second"));
        this.add = protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option[value='ADDITION']"));
        this.sub = protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option[value='SUBTRACTION']"));
        this.div = protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option[value='DIVISION']"));
        this.mod = protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option[value='MODULO']"));
        this.mul = protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option[value='MULTIPLICATION']"));
        this.go = protractor_1.element(protractor_1.by.id("gobutton"));
    }
}
exports.calculator = calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2NhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsVUFBVTtJQVluQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsR0FBRyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsR0FBRyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsR0FBRyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsR0FBRyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsRUFBRSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRXpDLENBQUM7Q0FDSjtBQXZCRCxnQ0F1QkMifQ==