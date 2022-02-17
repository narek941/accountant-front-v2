export const coursesFields = {
  name: {
    name: 'name',
    label: 'full_name',
    placeholder: 'full_name',
    required: true,
  },
  phoneNumber: {
    name: 'phoneNumber',
    label: 'phone_number',
    placeholder: '+374',
    required: true,
  },
  email: {
    name: 'email',
    label: 'email',
    placeholder: 'email',
    required: true,
  },
  lessonType: {
    name: 'lessonType',
    label: 'course_type',
    options: ['beginner', 'advanced', 'excel'],
  },
  lessonFormation: {
    name: 'lessonFormation',
    label: 'course_kind',
    options: ['grouped', 'individual'],
  },
};

export const coursesScheme = Object.keys(coursesFields);
