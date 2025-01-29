const DISH_TYPE = [
  { name: 'Appetizers', code: 'Ap' },
  { name: 'Main Dish', code: 'Md' },
  { name: 'Desserts', code: 'Ds' },
];

const VEGNONVEG = [
  { name: 'Vegetarian', code: '0' },
  { name: 'NonVegetarian', code: '1' },
];

const Data_Step1 = {
  Name: {
    type: 'text',
    class: 'form-control',
    validations: { required: true, minlength: 5 },
    errors: {
      required: 'Please provide recipe name',
      minlength: 'Recipe name must be at least 5 characters long',
    },
    placeholder: 'Recipe Name',
  },
  DishType: {
    type: 'select',
    class: 'form-control',
    options: DISH_TYPE,
    validations: { required: true },
    errors: {
      required: 'Please select a dish type',
    },
    placeholder: 'Select Dish Type',
  },
};

const Data_Step2 = {
  VegNonVeg: {
    type: 'select',
    class: 'form-control',
    options: VEGNONVEG,
    validations: { required: true },
    errors: {
      required: 'Please select nature of dish',
    },
    placeholder: 'Select Dish Nature',
  },
  EstimatedTimeInMinutes: {
    type: 'text',
    class: 'form-control',
    validations: { required: true },
    errors: {
      required: 'Please mentione estimated time to cook in minutes',
    },
    placeholder: 'Estimated time in minutes',
  },
  Ingredients: {
    type: 'textarea',
    class: 'form-control',
    validations: { required: true },
    errors: {
      required: 'Please mention the required ingredients',
    },
    placeholder: 'Comma separated required ingredients',
  },
};

const Data_Step3 = {
  Description: {
    type: 'textarea',
    class: 'form-control',
    validations: { required: true, minlength: 20 },
    errors: {
      required: 'Please provide recipe description',
      minlength: 'Recipe description must exceed minimum 20 characters',
    },
    placeholder: 'Recipe Description',
  },
  ImagePath: {
    type: 'file',
    class: 'form-control',
    validations: { required: true },
    errors: {
      required: 'Please upload an image of the finished dish',
    },
    placeholder: 'Proof',
  },
};

const STEP_ITEMS = [
  { label: 'Recipe Basics', data: Data_Step1 },
  { label: 'Requirements', data: Data_Step2 },
  { label: 'Description', data: Data_Step3 },
  { label: 'Review & Submit', data: {} },
];

export { STEP_ITEMS };
