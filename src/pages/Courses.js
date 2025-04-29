import CourseCard from '../components/CourseCard';

const Courses = () => {
  const courses = [
    { title: 'React Basics', description: 'Learn the basics of React.' },
    { title: 'AWS Cloud', description: 'Understand AWS fundamentals.' },
    { title: 'Python Data', description: 'Analyze data with Python.' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} description={course.description} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
