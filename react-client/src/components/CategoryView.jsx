import React from 'react';
import CategoryViewCourse from './CategoryViewCourse.jsx';

const CategoryView = props => (
  <div className="container">
    <h1>{props.category[0].name} Courses</h1>
    {/* pass through (props, { match }) to use react router
    React Router will provide match.params.categoryId */}
    {props.category[0].courses.map(course => <CategoryViewCourse course={course} />)}
  </div>
);

export default CategoryView;
