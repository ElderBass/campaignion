import dayjs from "dayjs";

export const formatPostDate = (date) => dayjs(date).format("MMMM D, YYYY");
