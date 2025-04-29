const CourseCard = ({ title, description }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View</button>
    </div>
  );
};

export default CourseCard;
