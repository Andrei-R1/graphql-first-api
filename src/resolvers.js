class Course {
  constructor(
    id,
    { courseName, category, price, language, email, stack, teachingAssists }
  ) {
    this.id = id;
    this.courseName = courseName;
    this.category = category;
    this.price = price;
    this.language = language;
    this.email = email;
    this.stack = stack;
    this.teachingAssists = teachingAssists;
  }
}

const courseHolder = {};
var id = 0;

const resolvers = {
  getCourse: ({ id }) => {
    return new Course(id, courseHolder[id]);
  },
  createCourse: ({ input }) => {
    let courseId = id++;
    courseHolder[id] = input;
    return new Course(id, input);
  },
};

export default resolvers;