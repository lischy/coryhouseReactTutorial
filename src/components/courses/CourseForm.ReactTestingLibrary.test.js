import React from "react";
import CourseForm from "./CoursesForm";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);
function renderCourseForm(args) {
  let defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render Add Course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});
it('should labels save buttons as "Save" when not saving', () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it('should labels save button as "Saving..." when saving', () => {
  const { getByText } = renderCourseForm({ saving: true });
  getByText("Saving...");
});
