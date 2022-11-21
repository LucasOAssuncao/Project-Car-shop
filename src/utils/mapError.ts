export const errorMap = {
  invalidField: 400,
  fieldRequired: 400,
  notFound: 404,
  typeError: 422,
};

export const mapError = (type: string | undefined): number =>
  errorMap[type as keyof typeof errorMap] || 500;
