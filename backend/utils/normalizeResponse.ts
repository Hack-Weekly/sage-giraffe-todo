import { responseType } from "./responseType";
export const getResponse = ({
  code,
  message,
  success,
  data,
}: responseType): responseType => {
  const res = {
    data,
    success,
    code,
    message,
  };
  if (data) res.data = data;

  return res;
};
