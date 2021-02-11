import React from "react";
import { mount } from "enzyme";
import { authors, courses, newCourse } from "../../../tools/mockData";
import { ManageCoursesPage } from "./ManageCoursePage";

function render(args) {
  const defaultProps = {
    authors,
    courses,
    history: {},
    saveCourse: jest.fn(),
    loadAuthors: jest.fn(),
    loadCourses: jest.fn(),
    course: newCourse,
    match: {},
  };
  const props = { ...defaultProps, ...args };
  return mount(<ManageCoursesPage {...props} />);
}
it("sets error when attempting to save an empty title field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Title is required.");
});
