export const initialComponentConfig = {
  component: null,
  operator: null,
  value: null,
  metric: null
};

export const labs = [
  {
    id: "labs-1",
    name: "Lab Result - Diastolic BP"
  },
  {
    id: "labs-2",
    name: "Lab Result - Systolic BP"
  },
  {
    id: "labs-3",
    name: "Lab Result - Glucose"
  },
  {
    id: "labs-4",
    name: "Lab Result - Date Taken"
  }
];

export const visits = [
  {
    id: "visits-1",
    name: "visit - Date"
  },
  {
    id: "visits-2",
    name: "visit - Number"
  }
];

export const operators = [
  { key: "equal", value: "equal", text: "is equal to" },
  { key: "greaterThan", value: "greaterThan", text: "is greater than" },
  { key: "lessThan", value: "lessThan", text: "is less than" },
  { key: "between", value: "between", text: "is between" },
  {
    key: "greaterThanEqual",
    value: "greaterThanEqual",
    text: "is greater than or equal to"
  },
  {
    key: "lessThanEqual",
    value: "lessThanEqual",
    text: "is less than or equal to"
  }
];

export const metrics = [{ key: "mmHg", value: "mmHg", text: "mm Hg" }];
